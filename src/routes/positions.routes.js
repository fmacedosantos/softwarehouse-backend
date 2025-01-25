const express = require('express')
const positionController = require('../controllers/positionController')
const checkToken = require('../middlewares/checkToken')
const validatePositions = require('../middlewares/validatePositions')

const router = express.Router()

router.get('/', checkToken, positionController.findAllPositions)

router.get('/:id', validatePositions.validateFindPosition, checkToken, positionController.findOnePosition)

router.post('/', validatePositions.validateCreatePosition, checkToken, positionController.createPosition)

router.put('/:id', validatePositions.validateUpdatePosition, checkToken, positionController.updatePosition)

router.delete('/:id', validatePositions.validateDeletePosition, checkToken, positionController.deletePosition)

module.exports = router