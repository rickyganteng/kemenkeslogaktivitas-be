const express = require('express')
const Route = express.Router()
const bookingRuangController = require('./waitingList_controller')
const authMiddleware = require('../../middleware/auth')
const uploadFile = require('../../middleware/uploads')

// Route.get('/name', movieController.getMovieName)
Route.get('/', bookingRuangController.getAllWaitingList)
Route.get('/tanpafill/q', bookingRuangController.getAllWaitingListTanpaFill)

// Route.get(
//   '/:id',
//   movieController.getMovieById
// )
Route.get(
  '/byid',
  authMiddleware.authentication,
  bookingRuangController.getWaitingListById
)

// Route.post(
//   '/',
//   authMiddleware.authentication,
//   // authMiddleware.isAdmin,
//   uploadFile,
//   bookingRuangController.postWaitingList)

Route.post(
  '/lebihsatu',
  authMiddleware.authentication,
  // authMiddleware.isAdmin,
  uploadFile,
  bookingRuangController.postWaitingListLebihSatu)

Route.patch(
  '/:id',
  authMiddleware.authentication,
  // authMiddleware.isAdmin,
  uploadFile,
  bookingRuangController.updateWaitingList
)

Route.delete(
  '/:id',

  bookingRuangController.deletedWaitingList
)

module.exports = Route
