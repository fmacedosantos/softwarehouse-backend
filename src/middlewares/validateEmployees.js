const validateFields = require('../utils/validateFields')

const validateFindEmployee = (req, res, next) => {
    const { id } = req.params
    const result = validateFields({ id })

    if(!result.isValid) {
        return res.status(400).json({ message: result.message })
    }

    next()
}

const validateCreateEmployee = (req, res, next) => {
    const { name, positionId, hireDate } = req.body
    const result = validateFields({ name, positionId, hireDate })

    if(!result.isValid) {
        return res.status(400).json({ message: result.message })
    }

    next()
}

const validateUpdateEmployee = (req, res, next) => {
    const { id } = req.params
    const { name, positionId, hireDate } = req.body
    const result = validateFields({ name, positionId, hireDate }, id)

    if(!result.isValid) {
        return res.status(400).json({ message: result.message })
    }

    next()
}

const validateDeleteEmployee = (req, res, next) => {
    const { id } = req.params
    const result = validateFields({ id })

    if(!result.isValid) {
        return res.status(400).json({ message: result.message })
    }

    next()
}

module.exports = {
    validateFindEmployee,
    validateCreateEmployee,
    validateUpdateEmployee,
    validateDeleteEmployee
}