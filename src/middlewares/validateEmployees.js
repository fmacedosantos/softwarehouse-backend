const validateFields = require('../utils/validateFields')

const validateFindEmployee = (req, res, next) => {

    const { id } = req.params

    const { isValid, message } = validateFields({ id })

    if(!isValid) {

        return res.status(400).json({ message })
    }

    next()
}

const validateCreateEmployee = (req, res, next) => {

    const { name, positionId, hireDate } = req.body

    const { isValid, message } = validateFields({ name, positionId, hireDate }, true)

    if(!isValid) {

        return res.status(400).json({ message })
    }

    next()
}

const validateUpdateEmployee = (req, res, next) => {

    const { id } = req.params
    const { name, positionId, hireDate } = req.body

    const { isValid, message } = validateFields({ id, name, positionId, hireDate }, false, true)

    if(!isValid) {

        return res.status(400).json({ message })
    }

    next()
}

const validateDeleteEmployee = (req, res, next) => {

    const { id } = req.params

    const { isValid, message } = validateFields({ id })

    if(!isValid) {

        return res.status(400).json({ message })
    }

    next()
}

module.exports = {
    validateFindEmployee,
    validateCreateEmployee,
    validateUpdateEmployee,
    validateDeleteEmployee
}