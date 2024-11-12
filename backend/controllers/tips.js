const Tips = require('../models/tips')

const getTips = async (req, res) => {
    console.log("Tipss")
    try {
        const response = await Tips.find();
        res.send(response);
    } catch (error) {
        throw new Error("Failed to fetch tips");
    }
}

module.exports = getTips
