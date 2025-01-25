const express = require('express')
const positionController = require('../controllers/positionController')
const checkToken = require('../middlewares/checkToken')

const router = express.Router()

router.get('/', checkToken, positionController.findAllPositions)

router.get('/:id', checkToken, positionController.findOnePosition)

router.post('/', checkToken, positionController.createPosition)

router.put('/:id', checkToken, positionController.updatePosition)

router.delete('/:id', checkToken, positionController.deletePosition)

module.exports = router