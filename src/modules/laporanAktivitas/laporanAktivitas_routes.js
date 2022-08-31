const express = require('express')
const Route = express.Router()
const userController = require('./laporanAktivitas_controller')
const authMiddleware = require('../../middleware/auth')
const uploadFile = require('../../middleware/uploads')

Route.get('/', userController.getAllLaporanAktivitas)
Route.get('/getafterdate', userController.getAfterDataNow)
Route.get('/getnotafterdate', userController.getNotAfterDataNow)
Route.get('/getlaporantoday', userController.getLaporanTOday)
Route.get('/:id', userController.getByIdLaporanAktivitas)
Route.get('/laporan/:id', userController.getLaporanAktivitasByIdUser)
Route.post(
  '/',
  authMiddleware.authentication,
  uploadFile,
  userController.postLaporanAktivitas
)
Route.get(
  '/cronjob/okey',
  // authMiddleware.authentication,
  uploadFile,
  userController.postLaporanAktivitasIfBlank
)
Route.patch(
  '/:id',
  authMiddleware.authentication,
  uploadFile,
  userController.updateLaporanAktivitas
)

Route.delete(
  '/:id',
  userController.deletedLaporanAktivitas
)
Route.delete(
  '/',
  userController.deletedLaporanAktivitasAll
)
module.exports = Route
