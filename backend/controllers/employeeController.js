const Employees = require('../models/employee')
const bcrypt = require("bcrypt");
const config = require('../config/config.json')
const {getFromApi, getImage} = require('../middlewares/getFromApi');
const { response } = require('express');

const createEmployee = async (req, res) => {
  try {
    const employeeWithHigherId = await Employees.findOne().sort({ id: -1 }).exec();

    const newEmployee = {
      id: employeeWithHigherId ? employeeWithHigherId.id + 1 : 1,
      email: req.body.email,
      name: req.body.name,
      password: await bcrypt.hash(req.body.password, 10),
      surname: req.body.surname,
      birth_date: req.body.birth_date,
      gender: req.body.gender,
      work: req.body.work
    };
    console.log(newEmployee)
    const existingEmployee = await Employees.findOne( { id: newEmployee.id, email: newEmployee.email });
    if (existingEmployee) {
      return res.status(400).send("Employee with same email already exists.");
    }
    const bitchassEmployee = new Employees(newEmployee)
    await bitchassEmployee.save();
    res.status(200).send("New Employee created sucessfully.");
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getEmployees = async (req, res) => {
  try {
    //response = await getFromApi(token, "https://soul-connection.fr/api/employees");
    const response = await Employees.find( {work: "Coach" });
    console.log(response);

    res.send(response)
  } catch (error) {
    res.status(500).json( {message: error.message })
  }
}

const getCurrentEmployee = async (req, res) => {
  try {
    // const token = req.cookies.access_token;
    // const response = await getFromApi(token, "https://soul-connection.fr/api/employees/me");
    const user = JSON.parse(req.cookies.user);;
    const response = Employees.findOne( { id: user.id})
    res.send(response);
  } catch (error) {
    res.status(500).json( {message: error.message });
  }
}

const getEmployeeById = async(req, res) => {
  try {
    const id = req.params.id;
    // const token = req.cookies.access_token;
    const response = await Employees.findOne({ id: id });
    res.send(response);
  } catch (error) {
    res.status(500).json( {message: error.message });
  }
}

const getEmployeeProfile = async(req, res) => {
  try {
    console.log("Getting Profile Photo...");
    const id = req.params.id;
    const token = req.cookies.access_token;
    const image = await getImage(token, `https://soul-connection.fr/api/employees/${id}/image`);
    res.set('Content-Type', 'image/png');

    const convertToBuffer = (arrayBuffer) => {
      return Buffer.from(new Uint8Array(arrayBuffer));
    };

    if (Array.isArray(image)) {
      for (const img of image) {
        try {
            await Employees.findOneAndUpdate({ id: id }, { img: { data: convertToBuffer(img), contentType: 'image/png' }}, {upsert : true, new : true});
        } catch (updateError) {
            console.error(`Error updating user with id ${id}:`, updateError);
        }
      }
    } else {
        try {
          await Employees.findOneAndUpdate({id: id}, {img: { data: convertToBuffer(image), contentType: 'image/png' } }, {upsert : true, new : true});
        } catch (error) {
            console.log(`Error while updating : ${error}`)
        }
    }
    console.log("Registered in Database !!");
    res.send(Buffer.from(image.data || image));
  } catch (error) {
    res.status(500).json( {message: error.message });
  }
}

module.exports = {
  createEmployee,
  getEmployees,
  getCurrentEmployee,
  getEmployeeById,
  getEmployeeProfile
};
