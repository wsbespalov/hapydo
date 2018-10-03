const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    complete_before: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Todos', TodoSchema);