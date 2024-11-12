const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config.json");
const {getFromApi, getImage} = require("../middlewares/getFromApi");
const Employees = require('../models/employee');
const Customers = require('../models/customer');
const Encounter = require('../models/encounter');
const Tokens = require('../models/token');

const login = async (req, res) => {
  console.log("User Tryna log in")
  const { email, password } = req.body;

  try {
    const response = await fetch("https://soul-connection.fr/api/employees/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "X-Group-Authorization": config.apikey,
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const responseData = await response.json();

    if (response.ok) {
      const reply = await getFromApi(responseData.access_token, "https://soul-connection.fr/api/employees/me");
      const replyData = reply;
      
      res.cookie("user", JSON.stringify({ ...replyData, token: responseData.access_token} ), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 36000000,
      });

      await Tokens.findOneAndUpdate(
        { id: replyData.id },
        { $set: { id: replyData.id, token: responseData.access_token, role: reply.work } },
        { new: true, upsert: true }
      );

      console.log("User Logged in :)");
      return res.status(200).json(replyData);
    }

    const localEmployee = await Employees.findOne({ email });
    console.log("User found" + localEmployee)
    if (localEmployee) {
      const validPassword = await bcrypt.compare(password, localEmployee.password);

      if (!validPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: localEmployee.id, email: localEmployee.email }, config.jwtSecret, { expiresIn: '10h' });

      res.cookie("user", JSON.stringify({ ...localEmployee, token: token }), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 36000000,
      });
      console.log("Local Employee logged in");
      return res.status(200).json(localEmployee);
    }
    return res.status(404).json({ message: "Employee not found" });
  } catch (error) {
    res.status(500).json({ detail: error.message });
  }
};

module.exports = login;
