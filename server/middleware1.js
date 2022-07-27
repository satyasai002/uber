const jwt = require('jsonwebtoken');
const { exists1 } = require('./models/driver.js');

module.exports = function(req, res, next){
    try {
        let token1 = req.header('x-token');
        if(!token1){
            return res.status(400).send('token not found');
        }
        let decode = jwt.verify(token1,'jwtSecret');
        req.driver = decode.driver;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send('server error');
    }
}