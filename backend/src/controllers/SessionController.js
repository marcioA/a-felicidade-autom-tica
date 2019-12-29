const User = require('../models/User')

module.exports = { 
    store(req, res){
        const { email } = req.body;

        const user = await User.create({email});
    }
};