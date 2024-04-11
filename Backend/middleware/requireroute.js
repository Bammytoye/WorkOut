const jwt = require('jsonwebtoken');
const User = require('../models/userModels'); 

const requireRoute = async (req, res, next) => {
    // Verify authentication
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' });
    }
    
    const token = authorization.split(' ')[1]; // Fixed the split delimiter

    try {
        const { _id } = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({ _id }).select('_id'); // Changed "req.user" to "const user"
        if (!user) {
            return res.status(401).json({ error: 'Request is not authorized' });
        }
        req.user = user; // Set the user on the request object
        next(); // Call next to move to the next middleware
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Request is not authorized' });
    }
};

module.exports = requireRoute; // Export the middleware function
