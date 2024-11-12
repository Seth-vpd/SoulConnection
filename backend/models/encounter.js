const mongoose = require('mongoose');

const encounterSchema = mongoose.Schema({
    id: Number,
    customer_id: Number,
    date: String,
    rating: Number,
    comment: String,
    source: String
});

const Encounter = mongoose.model('Encounter', encounterSchema)

module.exports = Encounter