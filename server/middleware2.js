const jwt = require('jsonwebtoken');
const { exists2 } = require('./models/driver.js');

module.exports = function(req, res, next){
    try {
        let token2 = req.header('x-token');
        if(!token2){
            return res.status(400).send('token not found');
        }
        let decode = jwt.verify(token2,'jwtSecret');
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send('server error');
    }
}