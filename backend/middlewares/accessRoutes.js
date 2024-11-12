const Tokens = require('../models/token')

const auth = async (req, res, next) => {
    try {
        console.log("Checking...")
        if (!req.cookies.user) {
            return res.status(401).json({ message: "No user logged in!" });
        }
      
        const user = JSON.parse(req.cookies.user);
        const userExists = await Tokens.findOne({ id: user.id, token: user.token })
        if (!userExists) {
            console.log("Not logged in")
            return res.status(401).json({ message: "Not authenticated !" })
        }
        console.log("User authenticated, can proceed")
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}

const canAccess = (roles) => {
    return (req, res, next) => {
        console.log("Checking user role...");
        try {
            const user = JSON.parse(req.cookies.user);
            if (!user.work || !roles.includes(user.work)) {
                console.log("Nah man, u can't do it")
                return res.status(403).json({ message: "Forbidden !"} );
            }
            console.log("User has access")
            next();
        } catch (error) {
            return res.status(403).json({ message: error.message });
        }
    }
}

module.exports = {
    auth,
    canAccess
}
