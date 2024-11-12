const Customers = require('../models/customer')
const Employees = require('../models/employee')
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
    if (!req.cookies.user) {
      return res.status(401).json({ message: "No user logged in!" });
    }
    console.log("Sending customers");
    const user = JSON.parse(req.cookies.user);
    if (user.work === "Coach") {
      console.log("Is coach")
      const coach = await Employees.findOne({ id: user.id})
      let customers = await Customers.find({
        id: { $in: coach.customers_ids}
      });
      customers = customers.map((customer) => {
        const { payments_history, ...customerWithoutPayments } = customer.toObject();
        return customerWithoutPayments;
      });
      console.log(customers);
      res.send(customers);
    } if (user.work === "VP of Marketing") {
      console.log("Is VP");
      const response = await Customers.find();
      console.log(response)
      res.send(response)
    }

  } catch (error) {
    res.status(500).json( {message: error.message })
  }
}

const customerById = async (req, res) => {
  try {
    const customer = await Customers.findOne({id : req.params.id});
    res.status(200).json(customer);
  } catch (error) {
    res.status(404).json({message: error.message })
  }
}

module.exports = {
  createCustomer,
  customerById,
  getCustomers
}