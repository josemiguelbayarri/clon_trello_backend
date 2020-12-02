const jwt = require('jsonwebtoken');
const { User, Token } = require('../models');
const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, 'bayarri');
        
        const user = await User.findByPk(payload.id);
        
        const tokenFound = await Token.findOne({
            where: {
                token: token,
                UserId: payload.id,
                revoked: false
            }
        })
        if (!user || !tokenFound) { 
            return res.status(401).send({
                message: 'You are not authorized.'
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        return res.status(401).send({
            message: 'You are not authorized', error
        })
    }
}



module.exports = {
    auth
}