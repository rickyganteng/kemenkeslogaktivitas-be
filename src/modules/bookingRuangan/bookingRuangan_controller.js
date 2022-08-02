require('dotenv').config()
const helper = require('../../helpers')
const bookingRuanganModel = require('./bookingRuangan_model')

module.exports = {
  getBookingRuanganName: async (req, res) => {
    try {
      const result = await bookingRuanganModel.movieName()
      return helper.response(res, 200, 'Succes get movie name', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getBookingRuanganById: async (req, res) => {
    try {
      let { userId, page, limit, sort, keywords } = req.query
      console.log('qqqqqqq', userId)

      limit = limit || '10'
      page = page || '1'
      keywords = keywords || '%'
      sort = sort || 'id ASC'

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit

      const totalData = await bookingRuanganModel.getDataCount(keywords)
      console.log('Total Data ' + totalData)
      const totalPage = Math.ceil(totalData / limit)
      console.log('Total Page id' + totalPage)

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData
      }
      // console.log(userId)
      const result = await bookingRuanganModel.getUserData(userId, page, limit, offset, sort, keywords)
      return helper.response(
        res,
        200,
        'Succes get User Booking history !',
        result,
        pageInfo
      )
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  getAllBookingTanpaFill: async (req, res) => {
    try {
      let { page, limit, sort, keywords } = req.query
      console.log(sort)

      limit = limit || '10'
      page = page || '1'
      keywords = keywords || '%'
      sort = sort || 'id ASC'

      page = parseInt(page)
      limit = parseInt(limit)

      const totalData = await bookingRuanganModel.getDataCount(keywords)
      console.log('Total Data ' + totalData)
      console.log('Total Data ' + limit)
      const totalPage = Math.ceil(totalData / limit)
      console.log('Total Page fill' + totalPage)

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData
      }
      const result = await bookingRuanganModel.getDataAllTanpaFill(keywords, sort)
      return helper.response(res, 200, 'Succes Get Booking Data', result, pageInfo)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  getAllBookingRuangan: async (req, res) => {
    try {
      // console.log(req.query)
      let { page, limit, sort, keywords } = req.query
      console.log(sort)
      console.log('s', page)
      console.log(limit)
      console.log(keywords)

      limit = limit || '10'
      page = page || '1'
      keywords = keywords || '%'
      sort = sort || 'id ASC'

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit

      const totalData = await bookingRuanganModel.getDataCount(keywords)
      console.log('Total Data ' + totalData)
      const totalPage = Math.ceil(totalData / limit)
      console.log('Total Page all' + totalPage)

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData
      }
      const result = await bookingRuanganModel.getDataAll(limit, offset, keywords, sort)
      // simpan data di redis

      // console.log('DATA RES', result.length)
      return helper.response(
        res,
        200,
        'Succes Get All Data',
        result,
        pageInfo
      )
    } catch (error) {
      // return helper.response(res, 400, 'Bad Request', error)
      console.log(error)
    }
  },
  postBookingRuangan: async (req, res) => {
    try {
      // console.log('Controller', req.body)
      const {
        ruangNamaPeminjam,
        ruangNIP,
        ruangNoHP,
        ruangEmail,
        ruangSatker,
        ruangDirektorat,
        ruangTanggalBooking,
        ruangKeteranganAcara,
        ruangRapatHadirOleh,
        ruangPenanggungJawab,
        ruangYangDigunakan,
        ruangWaktuMulai,
        ruangWaktuAkhir,
        idUserr,
        ruangBuktiSuratDinas
      } = req.body
      const setData = {
        booking_ruangan_nama: ruangNamaPeminjam,
        booking_ruangan_nip: ruangNIP,
        booking_ruangan_nohp: ruangNoHP,
        booking_ruangan_email: ruangEmail,
        booking_ruangan_unitkerja: ruangSatker,
        booking_ruangan_direktorat: ruangDirektorat,
        booking_ruangan_tanggal: ruangTanggalBooking,
        booking_ruangan_keterangan_kegiatan_acara: ruangKeteranganAcara,
        booking_ruang_rapat_hadir_oleh: ruangRapatHadirOleh,
        booking_ruangan_penaggung_jawab: ruangPenanggungJawab,
        booking_ruangan_ruangan: ruangYangDigunakan,
        booking_ruangan_waktu_penggunaan_awal: ruangWaktuMulai,
        booking_ruangan_waktu_penggunaan_akhir: ruangWaktuAkhir,
        id_peminjam: idUserr,
        booking_ruangan_surat_dinas: ruangBuktiSuratDinas
      }
      const checkNamaRuang = await bookingRuanganModel.getDataCondition(
        ruangYangDigunakan, ruangTanggalBooking, ruangWaktuMulai
      )
      console.log('POST Ruangan DATA SU', setData)

      if (checkNamaRuang.length === 0) {
        const result = await bookingRuanganModel.createData(setData)
        return helper.response(res, 200, 'Succes Create Data', result)
        // const result = await bookingRuanganModel.register(setData)
        // delete result.user_password

        // const url = `https://ticketingweb.herokuapp.com/backend1/api/v1/auth/change-data/${result.id}`

        // send email for verificatioan here
        // helper.sendMail('Please activate your account', url, userEmail)
      } else {
        return helper.response(res, 400, 'Tanggal booking sudah terpakai')
        // console.log(res)
      }
    } catch (error) {
      // return helper.response(res, 400, 'Bad Request', error)
      console.log(error)
    }
  },
  updateBookingRuangan: async (req, res) => {
    try {
      const { id } = req.params
      // kondisi pengecekan apakah data ada dalam database berdasarakan id
      let result = await bookingRuanganModel.getDataById(id)
      // console.log(result[0], '--', req.file)

      if (result.length > 0) {
        const {
          ruangNamaPeminjam,
          ruangNIP,
          ruangNoHP,
          ruangEmail,
          ruangSatker,
          ruangDirektorat,
          ruangTanggalBooking,
          ruangKeteranganAcara,
          ruangRapatHadirOleh,
          ruangPenanggungJawab,
          ruangYangDigunakan,
          ruangWaktuMulai,
          ruangWaktuAkhir,
          idUserr
        } = req.body
        const setData = {
          booking_ruangan_nama: ruangNamaPeminjam,
          booking_ruangan_nip: ruangNIP,
          booking_ruangan_nohp: ruangNoHP,
          booking_ruangan_email: ruangEmail,
          booking_ruangan_unitkerja: ruangSatker,
          booking_ruangan_direktorat: ruangDirektorat,
          booking_ruangan_tanggal: ruangTanggalBooking,
          booking_ruangan_keterangan_kegiatan_acara: ruangKeteranganAcara,
          booking_ruang_rapat_hadir_oleh: ruangRapatHadirOleh,
          booking_ruangan_penaggung_jawab: ruangPenanggungJawab,
          booking_ruangan_ruangan: ruangYangDigunakan,
          booking_ruangan_waktu_penggunaan_awal: ruangWaktuMulai,
          booking_ruangan_waktu_penggunaan_akhir: ruangWaktuAkhir,
          id_peminjam: idUserr,
          booking_ruangan_surat_dinas: req.file ? req.file.filename : result[0].booking_ruangan_surat_dinas,
          booking_ruangan_updated_at: new Date(Date.now())
        }

        if (req.file) {
          console.log('ada file')
          if (result[0].booking_ruangan_surat_dinas.length > 0) {
            console.log(`Delete Image${result[0].booking_ruangan_surat_dinas}`)
            const imgLoc = `src/uploads/${result[0].booking_ruangan_surat_dinas}`
            helper.deleteImage(imgLoc)
          } else {
            console.log('NO img in DB')
          }
        }
        // console.log('UPDATE DATA', req.body)
        // console.log(setData)
        // console.log('MOVIE IMAGE DB', result[0].movie_image.length)

        result = await bookingRuanganModel.updateData(setData, id)
        return helper.response(res, 200, 'Succes Update Movie', result)
      } else {
        return helper.response(
          res,
          404,
          `Cannnot Update !. Data by Id ${id} not Found !`,
          null
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deletedBookingRuangan: async (req, res) => {
    try {
      // console.log(req.params)
      const { id } = req.params
      let result = await bookingRuanganModel.getDataById(id)
      // console.log(result)

      if (result.length > 0) {
        const imgLoc = `src/uploads/${result[0].movie_image}`
        helper.deleteImage(imgLoc)
        result = await bookingRuanganModel.deleteData(id)
        return helper.response(
          res,
          200,
          `Succes Delete Booing Ruangan With ID ${id}`,
          result
        )
      } else {
        return helper.response(
          res,
          404,
          `Cannot Delete !.s Data by Id ${id} not Found !`,
          null
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
  // ,
  // register: async (req, res) => {
  //   try {
  //     // console.log(req.body)
  //     const {
  //       userEmail,
  //       // userPassword,
  //       firstName,
  //       lastName,
  //       userPhoneNumber
  //     } = req.body

  //     // const salt = bcrypt.genSaltSync(10)
  //     // const encryptPassword = bcrypt.hashSync(userPassword, salt)
  //     // console.log(`before Encrypt = ${userPassword}`)
  //     // console.log(`after Encrypt = ${encryptPassword}`)

  //     const setData = {
  //       user_name: firstName + ' ' + lastName,
  //       user_email: userEmail,
  //       // user_password: encryptPassword,
  //       user_phone_number: userPhoneNumber,
  //       user_profile_image: ''
  //     }

  //     const checkEmailUser = await bookingRuanganModel.getDataCondition({
  //       user_email: userEmail
  //     })

  //     if (checkEmailUser.length === 0) {
  //       const result = await bookingRuanganModel.register(setData)
  //       delete result.user_password

  //       const url = `https://ticketingweb.herokuapp.com/backend1/api/v1/auth/change-data/${result.id}`

  //       // send email for verificatioan here
  //       helper.sendMail('Please activate your account', url, userEmail)

  //       return helper.response(
  //         res,
  //         200,
  //         'Succes register User Please Check your Email to Activate your Account !',
  //         result
  //       )
  //     } else {
  //       return helper.response(res, 400, 'Email has been registered')
  //     }
  //   } catch (error) {
  //     // return helper.response(res, 400, 'Bad Request', error)
  //     console.log(error)
  //   }
  // }
}
