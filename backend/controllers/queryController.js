const Query = require('../models/Query');
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: "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" });


// Example controller functions
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

        const query = new Query({ currQuery: currQuery, response:responseContent });

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
}