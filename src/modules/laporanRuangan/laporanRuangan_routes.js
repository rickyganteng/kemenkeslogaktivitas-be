const express = require('express')
const Route = express.Router()
const bookingRuangController = require('./laporanRuangan_controller')
const authMiddleware = require('../../middleware/auth')
const uploadFile = require('../../middleware/uploads')

// Route.get('/name', movieController.getMovieName)
Route.get('/', bookingRuangController.getAllLaporanRuangan)
Route.get('/tanpafill/q', bookingRuangController.getAllLaporanTanpaFill)

// Route.get(
//   '/:id',
//   movieController.getMovieById
// )

Route.post(
  '/',
  authMiddleware.authentication,
  // authMiddleware.isAdmin,
  uploadFile,
  bookingRuangController.postLaporanRuangan
)

Route.get(
  '/byid',
  authMiddleware.authentication,
  bookingRuangController.getLaporanRuanganById
)
Route.get(
  '/bytanggal/tanggal/tanggal',
  authMiddleware.authentication,
  bookingRuangController.getAllLaporanTanggal
)
// Route.patch(
//   '/:id',
//   authMiddleware.authentication,
//   authMiddleware.isAdmin,
//   uploadFile,
//   movieController.updateMovie
// )

Route.delete(
  '/:id',

  bookingRuangController.deletedLaporanRuangan
)

module.exports = Route
