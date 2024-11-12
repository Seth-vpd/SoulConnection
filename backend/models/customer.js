const mongoose = require('mongoose');
const Encounter = require('./encounter');

const paymentSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    date: { type: String, required: true },
    payment_method: { type: String, required: true },
    amount: { type: Number, required: true },
    comment: { type: String }
});

const EncounterSchema = new mongoose.Schema({
    id : {type : Number, required: true},
    customer_id : {type : Number, required: true},
    date : {type : String, required: true},
    rating : {type : Number, required: true},
    comment : {type : String},
    source : {type : String}
});

const customerSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    surname: String,
    birth_date: String,
    gender: String,
    description: String,
    astrological_sign: String,
    phone_number: String,
    address: String,
    img: {
        data: Buffer,
        contentType: String
    },
    payments_history: [paymentSchema],
    encounters : [EncounterSchema]
});

const Customers = mongoose.model('Customers', customerSchema);

module.exports = Customers
