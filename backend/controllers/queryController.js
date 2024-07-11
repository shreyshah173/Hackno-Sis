const Query = require('../models/Query');
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: "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" });
const multer = require('multer');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const fs = require('fs').promises;

const upload = multer({ dest: 'uploads/' });

exports.getAllQueries = async (req, res) => {
    try {
        const queries = await Query.find();
        res.json(queries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createQuery = async (req, res) => {
    const { currQuery } = req.body;
    try {
        const groqResponse = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: currQuery,
                },
            ],
            model: "mixtral-8x7b-32768",
        });
        const responseContent = groqResponse.choices[0]?.message?.content || '';
        const query = new Query({ currQuery: currQuery, response: responseContent });
        const newQuery = await query.save();
        res.status(201).json(newQuery);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteAllQueries = async (req, res) => {
    try {
        await Query.deleteMany({});
        res.json({ message: 'All queries deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// New function to handle file uploads and chat with document
exports.chatWithDocument = async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    try {
        let text = '';
        if (file.mimetype === 'application/pdf') {
            const data = await fs.readFile(file.path);
            const pdfData = await pdfParse(data);
            text = pdfData.text;
        } else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const data = await fs.readFile(file.path);
            const docData = await mammoth.extractRawText({ buffer: data });
            text = docData.value;
        } else if (file.mimetype === 'text/plain') {
            text = await fs.readFile(file.path, 'utf-8');
        } else {
            return res.status(400).json({ message: 'Unsupported file type' });
        }

        const groqResponse = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: text,
                },
            ],
            model: "mixtral-8x7b-32768",
        });
        const responseContent = groqResponse.choices[0]?.message?.content || '';
        res.status(200).json({ response: responseContent });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        // Clean up the uploaded file
        await fs.unlink(file.path);
    }
};
