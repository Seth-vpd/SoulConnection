const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: String,
    surname: String,
    birth_date: String,
    gender: String,
    work: String,
    img: {
        data: Buffer,
        contentType: String
    },
    customers_ids: [Number]
});

const Employees = mongoose.model('Employees', employeeSchema);

module.exports = Employees