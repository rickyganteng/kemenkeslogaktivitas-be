const helper = require('../../helpers')
const laporanAktivitasModel = require('./laporanAktivitas_model')
// ssss
module.exports = {
  getAllLaporanAktivitas: async (req, res) => {
    try {
      let { page, limit, sort, sortCol, keywords } = req.query
      limit = limit || '10'
      page = page || '1'
      keywords = keywords || '%%'
      sortCol = sortCol || 'user_name'
      sort = sort || 'user_name ASC'

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit
      const totalData = await laporanAktivitasModel.getDataCount(limit, offset, sortCol, sort, keywords)
      // let hehe = parseInt(totalData.length)
      const totalPage = Math.ceil(totalData.length / limit)
      const pageInfo = { page, totalPage, limit, totalData }
      // const result = await laporanAktivitasModel.getDataAllLaporanAktivitas(limit, offset, keywords, sort)
      return helper.response(res, 200, 'Succes Get User Data', totalData, pageInfo)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getByIdLaporanAktivitas: async (req, res) => {
    try {
      const { id } = req.params
      const result = await laporanAktivitasModel.getDataByIdLaporanAktivitas(id)

      if (result.length > 0) {
        return helper.response(res, 200, 'Succes Get User Data', result)
      } else {
        return helper.response(res, 404, `Data By Id ${id} not Found`, null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  getLaporanAktivitasByIdUser: async (req, res) => {
    try {
      const { id } = req.params
      const result = await laporanAktivitasModel.getDataLaporanAktivitasByIdUser(id)

      if (result.length > 0) {
        return helper.response(res, 200, 'Succes Get User Data', result)
      } else {
        return helper.response(res, 404, `Data By Id ${id} not Found`, null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  postLaporanAktivitas: async (req, res) => {
    try {
      // console.log('Controller', req)
      const {
        namaLengkap,
        isiAktivitas
        // ruangBuktiSuratDina
      } = req.body
      const setData = {
        logaktivitas_user_id: namaLengkap,
        logaktivitas_isi: isiAktivitas
      }
      console.log('POST DATA', setData)
      const checkLog = await laporanAktivitasModel.getDataCondition({
        logaktivitas_user_id: namaLengkap
      })
      // console.log('checklog', checkLog);
      if (checkLog.length === 0) {
        const result = await laporanAktivitasModel.createData(setData)
        return helper.response(res, 200, 'Succes Create Data', result)
      } else {
        return helper.response(res, 400, 'Anda Sudah Input Aktivitas Hari Ini')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },

  updateLaporanAktivitas: async (req, res) => {
    try {
      const { id } = req.params

      let result = await laporanAktivitasModel.getDataByIdLaporanAktivitasUpdate(id)
      if (result.length > 0) {
        const {
          isiAktivitas
        } = req.body
        const setData = {
          logaktivitas_user_id: result[0].logaktivitas_user_id,
          logaktivitas_isi: isiAktivitas,
          logaktivitas_updated_at: new Date(Date.now())
        }
        // console.log('UPDATE DATA', req.body)
        // console.log(setData)
        // console.log('MOVIE IMAGE DB', result[0].movie_image.length)

        result = await laporanAktivitasModel.updateData(setData, id)
        return helper.response(res, 200, 'Succes Update Data', result)
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
  deletedLaporanAktivitas: async (req, res) => {
    try {
      // console.log(req.params)
      const { id } = req.params
      let result = await laporanAktivitasModel.getDataByIdLaporanAktivitasUpdate(id)
      // console.log(result)

      if (result.length > 0) {
        const imgLoc = `src/uploads/${result[0].movie_image}`
        helper.deleteImage(imgLoc)
        result = await laporanAktivitasModel.deleteData(id)
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
  },
  getAfterDataNow: async (req, res) => {
    try {
      const result = await laporanAktivitasModel.getAfterDataNow()

      if (result.length > 0) {
        return helper.response(res, 200, 'Succes Get User Data', result)
      } else {
        return helper.response(res, 404, 'Data not Found', null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  getNotAfterDataNow: async (req, res) => {
    try {
      const result = await laporanAktivitasModel.getNotAfterDataNow()

      if (result.length > 0) {
        return helper.response(res, 200, 'Succes Get User Data', result)
      } else {
        return helper.response(res, 404, 'Data not Found', null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  getLaporanTOday: async (req, res) => {
    try {
      const result = await laporanAktivitasModel.getDataLaporanToday()
      const datakosong = []
      result.forEach((item) => {
        if (item.logaktivitas_isi === null) {
          const setData = {
            user_name: item.user_name,
            user_nip: item.user_nip,
            user_pangkat: item.user_pangkat,
            logaktivitas_isi: 'Belum mengisi data hari ini',
            logaktivitas_created_at: item.logaktivitas_created_at
          }
          datakosong.push(setData)
        } else if (item.logaktivitas_isi !== null) {
          const setData = {
            user_name: item.user_name,
            user_nip: item.user_nip,
            user_pangkat: item.user_pangkat,
            logaktivitas_isi: item.logaktivitas_isi,
            logaktivitas_created_at: item.logaktivitas_created_at
          }
          datakosong.push(setData)
        }
      })
      if (datakosong.length > 0) {
        return helper.response(res, 200, 'Succes Get User Data', datakosong)
      } else {
        return helper.response(res, 404, 'Data not Found', null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  }
}
