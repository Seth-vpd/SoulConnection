const Customers = require('../models/customer')
const config = require('../config/config.json')
const getFromApi = require('../middlewares/getFromApi')

const createCustomer = async (req, res) => {
    try {
      const customerWitHigherId = await Customers.findOne().sort({ id: -1 }).exec();
  
      const newCustomer = {
        id: customerWitHigherId.id + 1,
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
        description: req.body.description,
        astrological_sign: req.body.astrological_sign,
        phone_number: req.body.phone_number
      };
      console.log(newCustomer)
      const existingEmployee = await Customers.findOne( { id: newCustomer.id, email: newCustomer.email });
      if (existingEmployee) {
        return res.status(500).send("Customer with same informations already exists.");
      }
      const customer = new Customers(newCustomer)
      await customer.save();
      res.status(200).send("New Customer created sucessfully.");
    } catch (error) {
      res.status(500).send(error.message)
    }
}

const getCustomers = async (req, res) => {
  try {
    console.log("Sending customers");
    const response = await Customers.find();
    res.send(response)
  } catch (error) {
    res.status(500).json( {message: error.message })
  }
}

module.exports = {
  createCustomer,
  getCustomers
}