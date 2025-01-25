const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

function generateToken(username, role) {

    const payload = { username, role }

    const token = jwt.sign(
        payload,
        secret,
        {
            expiresIn: '4h'
        }
    )

    return token
}

function validateToken(token) {

    return new Promise((resolve, reject) => {

        jwt.verify(token, secret, (error, decodedToken) => {

            if (error) reject(error)
            else if(decodedToken) resolve(decodedToken)
        })
    })
}

module.exports = {
    generateToken,
    validateToken
}