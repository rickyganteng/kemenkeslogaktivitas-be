const express = require('express')
const Route = express.Router()
const movieController = require('./dataPeminjam_controller')
const authMiddleware = require('../../middleware/auth')
const uploadFile = require('../../middleware/uploads')

Route.get('/name', movieController.getMovieName)
Route.get('/', movieController.getAllMovie)
Route.get(
  '/:id',

  movieController.getMovieById
)
Route.get(
  '/fasilitas/:id',

  movieController.getFasilitasById
)

Route.post(
  '/',
  authMiddleware.authentication,
  authMiddleware.isAdmin,
  uploadFile,
  movieController.postMovie
)
Route.post(
  '/fasilitas',
  authMiddleware.authentication,
  authMiddleware.isAdmin,
  uploadFile,
  movieController.postFasilitas
)

Route.patch(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.isAdmin,
  uploadFile,
  movieController.updateDataRuangan
)

Route.patch(
  '/fasilitas/:id',
  authMiddleware.authentication,
  authMiddleware.isAdmin,
  uploadFile,
  movieController.updateFasilitas
)

Route.delete(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.isAdmin,
  movieController.deletedRuanganById
)

module.exports = Route
