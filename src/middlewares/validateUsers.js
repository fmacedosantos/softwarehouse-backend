const validateFields = require('../utils/validateFields')

const validateAuthentication = (req, res, next) => {
    
    const { username, password } = req.body

    const result = validateFields({ username, password })

    if(!result.isValid) {

        return res.status(400).json({ message: result.message })
    }

    next()
}

module.exports = {
    validateAuthentication
}