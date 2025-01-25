const validateFields = (fields, isAllFieldsRequired = false, isUpdating = false) => {

    const errors = []
    let message = ''
    let hasValidField = false

    for(const [fieldName, fieldValue] of Object.entries(fields)) {

        if(isAllFieldsRequired || fieldValue !== undefined) {
            if(!fieldValue || String(fieldValue).trim() === '') {
                errors.push(fieldName)
            } else {
                hasValidField = true
            }
        }
    }

    if(isUpdating) {
        const { id, ...updateFields } = fields
        if (!id || !hasValidField) {
            message = 'O id e pelo menos um campo válido devem ser fornecidos para atualização'
            return { message, isValid: false }
        }
    }

    if(isAllFieldsRequired && errors.length > 0) {
        message = 'Preencha todos os campos: ' + errors.join(', ')
        return { message, isValid: false }
    }

    if(errors.length > 0) {
        message = errors.length > 1 ? 'Campos inválidos: ' + errors.join(', ') : 'Campo inválido: ' + errors[0]
        return { message, isValid: false }
    }

    return { message, isValid: true }
}

module.exports = validateFields