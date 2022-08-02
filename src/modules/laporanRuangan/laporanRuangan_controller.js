require('dotenv').config()
const helper = require('../../helpers')
const bookingRuanganModel = require('./laporanRuangan_model')

module.exports = {
  getLaporanRuanganName: async (req, res) => {
    try {
      const result = await bookingRuanganModel.movieName()
      return helper.response(res, 200, 'Succes get movie name', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getAllLaporanTanpaFill: async (req, res) => {
    try {
      let { keywords } = req.query

      keywords = keywords || '%'

      const result = await bookingRuanganModel.getDataAllTanpaFill(keywords)
      return helper.response(res, 200, 'Succes Get Booking Data', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getAllLaporanTanggal: async (req, res) => {
    try {
      let { searchtanggal, fromdate, todate } = req.query
      // console.log(sort)
      searchtanggal = searchtanggal || '%'
      // sort = sort || 'id DESC'

      // const totalData = await bookingRuanganModel.getDataCount(keywords)
      // console.log('Total Data ' + totalData)
      // const totalPage = Math.ceil(totalData / limit)
      // console.log('Total Page ' + totalPage)

      // const pageInfo = {
      //   page,
      //   totalPage,
      //   limit,
      //   totalData
      // }
      const result = await bookingRuanganModel.getDataAllTanggal(searchtanggal, fromdate, todate)
      return helper.response(res, 200, 'Succes Get Booking Data', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getAllLaporanRuangan: async (req, res) => {
    try {
      // console.log(req.query)
      let { page, limit, sort, keywords } = req.query
      console.log(sort)

      limit = limit || '6'
      page = page || '1'
      keywords = keywords || '%'
      sort = sort || 'id DESC'

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit

      const totalData = await bookingRuanganModel.getDataCount(keywords)
      console.log('Total Data ' + totalData)
      const totalPage = Math.ceil(totalData / limit)
      console.log('Total Page ' + totalPage)

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
  getLaporanRuanganById: async (req, res) => {
    try {
      console.log('huhuh', req.query)
      const { userId } = req.query
      // console.log(userId)
      const result = await bookingRuanganModel.getUserData(userId)

      return helper.response(
        res,
        200,
        'Succes get User Booking history !',
        result
      )
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  postLaporanRuangan: async (req, res) => {
    try {
      // console.log('Controller', req.body)
      const {
        laporanruangNamaPeminjam,
        laporanruangNIP,
        laporanruangNoHP,
        laporanruangEmail,
        laporanruangSatker,
        laporanruangDirektorat,
        laporanruangTanggalBooking,
        laporanruangKeteranganAcara,
        laporanruangRapatHadirOleh,
        laporanruangPenanggungJawab,
        laporanruangYangDigunakan,
        laporanruangWaktuMulai,
        laporanruangWaktuAkhir,
        laporanruangBuktiSuratDinas,
        statusBooking,
        idUserr
        // ruBuktiSuratDinas
      } = req.body
      console.log('user', idUserr)
      const setData = {
        booking_ruangan_nama: laporanruangNamaPeminjam,
        booking_ruangan_nip: laporanruangNIP,
        booking_ruangan_nohp: laporanruangNoHP,
        booking_ruangan_email: laporanruangEmail,
        booking_ruangan_unitkerja: laporanruangSatker,
        booking_ruangan_direktorat: laporanruangDirektorat,
        booking_ruangan_tanggal: laporanruangTanggalBooking,
        booking_ruangan_keterangan_kegiatan_acara: laporanruangKeteranganAcara,
        booking_ruang_rapat_hadir_oleh: laporanruangRapatHadirOleh,
        booking_ruangan_penaggung_jawab: laporanruangPenanggungJawab,
        booking_ruangan_ruangan: laporanruangYangDigunakan,
        booking_ruangan_waktu_penggunaan_awal: laporanruangWaktuMulai,
        booking_ruangan_waktu_penggunaan_akhir: laporanruangWaktuAkhir,
        status_booking_ruangan: statusBooking,
        id_peminjam: idUserr,
        booking_ruangan_surat_dinas: laporanruangBuktiSuratDinas
      }
      console.log('POST DATA LAPORAN SU', setData)
      const result = await bookingRuanganModel.createData(setData)
      return helper.response(res, 200, 'Succes Create Data', result)
    } catch (error) {
      // return helper.response(res, 400, 'Bad Request', error)
      console.log(error)
    }
  },
  updateLaporanRuangan: async (req, res) => {
    try {
      const { id } = req.params
      // kondisi pengecekan apakah data ada dalam database berdasarakan id
      let result = await bookingRuanganModel.getDataById(id)
      // console.log(result[0], '--', req.file)

      if (result.length > 0) {
        const {
          movieName,
          movieCategory,
          movieReleaseDate,
          movieDuration,
          movieDirectedBy,
          movieCasts,
          movieSynopsis
        } = req.body
        const setData = {
          movie_name: movieName,
          movie_category: movieCategory,
          movie_release_date: movieReleaseDate,
          movie_duration: movieDuration,
          movie_directed_by: movieDirectedBy,
          movie_casts: movieCasts,
          movie_synopsis: movieSynopsis,
          movie_image: req.file ? req.file.filename : result[0].movie_image,
          movie_updated_at: new Date(Date.now())
        }

        if (req.file) {
          console.log('ada file')
          if (result[0].movie_image.length > 0) {
            console.log(`Delete Image${result[0].movie_image}`)
            const imgLoc = `src/uploads/${result[0].movie_image}`
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
  deletedLaporanRuangan: async (req, res) => {
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
}
