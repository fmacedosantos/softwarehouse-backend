const express = require('express')
const userController = require('../controllers/userController')
const validateUsers = require('../middlewares/validateUsers')

const router = express.Router()

router.post('/login', validateUsers.validateAuthentication, userController.login)

router.post('/create', validateUsers.validateAuthentication, userController.createUser)

module.exports = router