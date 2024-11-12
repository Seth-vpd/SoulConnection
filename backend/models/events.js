const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    date: String,
    max_participants: String,
    location_x: String,
    location_y: String,
    type: String,
    employee_id: String,
    location_name: String
})

const Events = mongoose.model('Events', eventSchema);

module.exports = Events
