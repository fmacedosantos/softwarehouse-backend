const express = require('express');
const positionController = require('../controllers/position');

const router = express.Router();

router.get('/', positionController.findAllPositions);

router.get('/:id', positionController.findOnePosition);

router.post('/', positionController.createPosition);

router.put('/:id', positionController.updatePosition);

router.delete('/:id', positionController.deletePosition);

module.exports = router;