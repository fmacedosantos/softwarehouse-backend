const { validateToken } = require('../utils/auth') 

async function checkToken(req, res, next) {

    try {

        const authHeader = req.headers.authorization 

        if (!authHeader) { 
            throw new Error('Usuário não autenticado!')
        }

        // extraindo o token no formato Bearer <token>
        const token = authHeader.split(' ')[1] 

        if (!token) { 
            throw new Error('Usuário não autenticado!')
        }

        const user = await validateToken(token) 

        req.user = user 

        next() 
    } catch (error) {
        return res.status(401).json({ message: error.message }) 
    }
}

module.exports = checkToken