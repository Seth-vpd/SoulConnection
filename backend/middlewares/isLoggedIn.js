const Tokens = require('../models/token')

const isLoggedIn = async (req, res) => {
    try {
        const user = JSON.parse(req.cookies.user);
        //console.log("Token " + user.token)
    
        const userExists = await Tokens.findOne({ id: user.id, token: user.token })
        if (!userExists) {
            return res.status(401).json({ message: "Not authentified !" })
        }
        console.log("Auth successful")
        res.status(200).send("User has access");
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}

module.exports = isLoggedIn