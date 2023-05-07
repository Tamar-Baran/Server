const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const userHeader = req.headers.authorization || req.headers.Authorization
    console.log(req.headers.authorization)
    if (!userHeader?.startsWith('Bearer ')) {
        console.log("aaaaaaaaaaaaaaaaaaaaaaa")
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const token = userHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'You are not authorized to access this page, you must log in' })
            req.user = decoded
           
            next()
        }
    )
}

module.exports = verifyJWT 