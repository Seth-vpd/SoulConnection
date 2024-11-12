const Events = require('../models/events')
const getFromApi = require('../middlewares/getFromApi');

const getEvents = async (req, res) => {
  try {
    //response = await getFromApi(token, "https://soul-connection.fr/api/Events");
    const response = await Events.find();
    console.log(response);

    res.send(response)
  } catch (error) {
    res.status(500).json( {message: error.message })
  }
}

const getEventById = async(req, res) => {
  try {
    const id = req.params.id;
    // const token = req.cookies.access_token;
    const response = await Events.findOne({ id: id });
    res.send(response);
  } catch (error) {
    res.status(500).json( { message: error.message });
  }
}

module.exports = {
  getEvents,
  getEventById
};
