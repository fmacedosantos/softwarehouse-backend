const express = require('express')
const employeeController = require('../controllers/employeeController')
const checkToken = require('../middlewares/checkToken')
const validateEmployees = require('../middlewares/validateEmployees')
const checkRoles = require('../middlewares/checkRoles')

const router = express.Router()

router.get('/', checkToken, checkRoles(['manager', 'admin']), employeeController.findAllEmployees)

router.get('/:id', validateEmployees.validateFindEmployee, checkToken, checkRoles(['manager', 'admin']), employeeController.findOneEmployee)

router.post('/', validateEmployees.validateCreateEmployee, checkToken, checkRoles(['manager', 'admin']), employeeController.createEmployee)

router.put('/:id', validateEmployees.validateUpdateEmployee, checkToken, checkRoles(['manager', 'admin']), employeeController.updateEmployee)

router.delete('/:id', validateEmployees.validateDeleteEmployee, checkToken, checkRoles(['admin']), employeeController.deleteEmployee)

module.exports = router