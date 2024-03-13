const User = require ('../models/userModels.js')

//login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}


//signup user
const SignupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

module.exports = {loginUser, SignupUser}