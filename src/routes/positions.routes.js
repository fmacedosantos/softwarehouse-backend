const express = require('express')
const positionController = require('../controllers/positionController')
const checkToken = require('../middlewares/checkToken')
const validatePositions = require('../middlewares/validatePositions')
const checkRoles = require('../middlewares/checkRoles')

const router = express.Router()

router.get('/', checkToken, checkRoles(['employee', 'manager', 'admin']), positionController.findAllPositions)

router.get('/:id', validatePositions.validateFindPosition, checkToken, checkRoles(['employee', 'manager', 'admin']), positionController.findOnePosition)

router.post('/', validatePositions.validateCreatePosition, checkToken, checkRoles(['manager', 'admin']), positionController.createPosition)

router.put('/:id', validatePositions.validateUpdatePosition, checkToken, checkRoles(['manager', 'admin']), positionController.updatePosition)

router.delete('/:id', validatePositions.validateDeletePosition, checkToken, checkRoles(['admin']), positionController.deletePosition)

module.exports = router