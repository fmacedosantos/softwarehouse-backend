const express = require('express');
const employeeController = require('../controllers/employee');

const router = express.Router();

router.get('/', employeeController.findAllEmployees);

router.get('/:id', employeeController.findOneEmployee);

router.post('/', employeeController.createEmployee);

router.put('/:id', employeeController.updateEmployee);

router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;