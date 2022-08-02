const express = require('express')
const Route = express.Router()
const bookingRuangController = require('./bookingRuangan_controller')
const authMiddleware = require('../../middleware/auth')
const uploadFile = require('../../middleware/uploads')

// Route.get('/name', movieController.getMovieName)
Route.get('/', bookingRuangController.getAllBookingRuangan)
Route.get('/tanpafill/q', bookingRuangController.getAllBookingTanpaFill)

// Route.get(
//   '/:id',
//   movieController.getMovieById
// )
Route.get(
  '/byid',
  authMiddleware.authentication,
  bookingRuangController.getBookingRuanganById
)

Route.post(
  '/',
  authMiddleware.authentication,
  // authMiddleware.isAdmin,
  uploadFile,
  bookingRuangController.postBookingRuangan
)

Route.patch(
  '/:id',
  authMiddleware.authentication,
  // authMiddleware.isAdmin,
  uploadFile,
  bookingRuangController.updateBookingRuangan
)

Route.delete(
  '/:id',

  bookingRuangController.deletedBookingRuangan
)

module.exports = Route
