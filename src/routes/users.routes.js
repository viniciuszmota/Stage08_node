const { Router } = require('express')

const UsersController = require('../controllers/UsersControllers')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)

module.exports = usersRoutes