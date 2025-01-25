const express = require('express')
const employeeController = require('../controllers/employeeController')
const checkToken = require('../middlewares/checkToken')

const router = express.Router()

router.get('/', checkToken, employeeController.findAllEmployees)

router.get('/:id', checkToken, employeeController.findOneEmployee)

router.post('/', checkToken, employeeController.createEmployee)

router.put('/:id', checkToken, employeeController.updateEmployee)

router.delete('/:id', checkToken, employeeController.deleteEmployee)

module.exports = router