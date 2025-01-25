const express = require('express')
const employeeController = require('../controllers/employeeController')
const checkToken = require('../middlewares/checkToken')
const validateEmployees = require('../middlewares/validateEmployees')

const router = express.Router()

router.get('/', checkToken, employeeController.findAllEmployees)

router.get('/:id', validateEmployees.validateFindEmployee, checkToken, employeeController.findOneEmployee)

router.post('/', validateEmployees.validateCreateEmployee, checkToken, employeeController.createEmployee)

router.put('/:id', validateEmployees.validateUpdateEmployee, checkToken, employeeController.updateEmployee)

router.delete('/:id', validateEmployees.validateDeleteEmployee, checkToken, employeeController.deleteEmployee)

module.exports = router