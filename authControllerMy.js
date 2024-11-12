const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config.json");
const {getFromApi, getImage} = require("../middlewares/getFromApi");
const Employees = require('../models/employee');
const Customers = require('../models/customer');
const Encounter = require('../models/encounter');
const Tokens = require('../models/token');

const fillDb = async (token, Schema, route, reqId) => {
  try {
    const response = await getFromApi(token, route);
    console.log("Filling DB");
    
    const updatesPromises = response.map(async (user) => {
      const userInfo = await getFromApi(token, `${route}/${user.id}`);

      if (Schema.modelName === 'Customers') {
        const payments = await getFromApi(token, `${route}/${user.id}/payments_history`);
        userInfo.payments_history = payments;
      }
      await Schema.findOneAndUpdate({ id: userInfo.id }, {$set: userInfo }, { new: true, upsert: true });
    });
    
    await Promise.all(updatesPromises);
    console.log('Updated DB');
  } catch (error) {
    throw new Error(error.message);
  }
}


const login = async (req, res) => {
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

      await Tokens.findOneAndUpdate({ id: replyData.id }, {$set: { id: replyData.id, token: responseData.access_token, role: reply.work } }, { new: true, upsert: true });
      res.status(200).json(replyData);
    } else {
      console.log("Didn't fetch");
      res.status(response.status).json(responseData);
    }
  } catch (error) {
    res.status(500).json({ detail: error.message });
  }
};

module.exports = login;


// NOW I'M UPDATING THE DB, BUT WHEN U TEST IT SEEMS TO TAKE LONG BEFORE ENDING.
// AND IT WILL AFFECT THE USER EXPERIENCE IF IT TAKES THIS LONG TO UPDATE
// NOW WE SHOULD FIND A WAY TO HANDLE IT

