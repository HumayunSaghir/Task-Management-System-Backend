const {verifyToken} = require('../services/auth')

function softAuth(req, res, next){

    const token = req.cookies['token']

    if(!token){
        req.user = undefined
        return next()
    }

    const user = verifyToken(token)

    req.user = user
    next()
}

module.exports = {
    softAuth,
}