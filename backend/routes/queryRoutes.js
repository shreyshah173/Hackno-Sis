const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

// Routes for /api/queries

// Example routes
router.get('/', queryController.getAllQueries);
router.post('/', queryController.createQuery);
router.delete('/', queryController.deleteAllQueries)

module.exports = router;
