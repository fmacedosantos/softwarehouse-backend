const validateFields = (fields) => {
    const errors = []

    for(const [fieldName, fieldValue] of Object.entries(fields)) {
        if(!fieldValue || String(fieldValue).trim() === '') {
            errors.push(fieldName)
        }
    }

    if(errors.length > 0) {
        const message = errors.length > 1 ? 'Campos inválidos: ' + errors.join(', ') : 'Campo inválido: ' + errors[0]
        return { message, isValid: false }
    }

    return { message: '', isValid: true }
}

module.exports = validateFields