const express = require('express')
const Route = express.Router()
const userController = require('./user_controller')
const authMiddleware = require('../../middleware/auth')
const uploadFile = require('../../middleware/uploads')

Route.post(
  '/',
  authMiddleware.authentication,
  uploadFile,
  userController.register
)
Route.get('/:id', userController.getByIdUser)
Route.get('/tanpafill/q', userController.getAllUserTanpaFill)
Route.patch(
  '/:id',
  authMiddleware.authentication,
  // authMiddleware.isAdmin,
  uploadFile,
  userController.updateUserLaporan
)
Route.delete(
  '/:id',
  userController.deletedUSer
)
module.exports = Route
