const Query = require('../models/Query');

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
    const query = new Query({ currQuery });

    try {
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