const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    currQuery: {
        type: String,
        required: true
    },
    solved: {
        type: Boolean,
        default: false,
    },
    response:{
        type: String,
        default: "No response yet"
    },
    responded:{
        type: Boolean,
        default: false
    
    }
});

module.exports = mongoose.model('Query', querySchema);
