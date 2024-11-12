const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    tip: String
});

const Tips = mongoose.model('Tips', tipSchema);

module.exports = Tips
