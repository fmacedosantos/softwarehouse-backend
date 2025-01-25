const validateFields = require('../utils/validateFields')

const validateFindPosition = (req, res, next) => {
    const { id } = req.params
    const result = validateFields({ id })

    if(!result.isValid) {
        return res.status(400).json({ message: result.message })
    }

    next()
}

const validateCreatePosition = (req, res, next) => {
    const { title, salary } = req.body
    const result = validateFields({ title, salary })

    if(!result.isValid) {
        return res.status(400).json({ message: result.message })
    }

    next()
}

const validateUpdatePosition = (req, res, next) => {
    const { id } = req.params
    const { title, salary } = req.body

    const result = validateFields({ id })

    if(!result.isValid) {
        return res.status(400).json({ message: result.message })
    }

    if (!title && !salary) {
        return res.status(400).json({ message: 'Pelo menos um campo válido deve ser fornecido para atualização' })
    }

    next()
}

const validateDeletePosition = (req, res, next) => {
    const { id } = req.params
    const result = validateFields({ id })

    if(!result.isValid) {
        return res.status(400).json({ message: result.message })
    }

    next()
}

module.exports = {
    validateFindPosition,
    validateCreatePosition,
    validateUpdatePosition,
    validateDeletePosition
}