const helper = require('../../helpers')
const laporanAktivitasModel = require('./laporanAktivitas_model')

// ssss
module.exports = {
  getAllLaporanAktivitas: async (req, res) => {
    console.log('nyoba noyba');
    try {
      let { page, limit, sort, sortCol, keywords, fromdate, todate } = req.query
      limit = limit || '10'
      page = page || '1'
      keywords = keywords || '%%'
      sortCol = sortCol || 'user_name'
      sort = sort || 'logaktivitas_created_at DESC'
      fromdate = fromdate || ''
      todate = todate || ''

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit
      if (fromdate === '' && todate === '') {
        const totalData = await laporanAktivitasModel.getDataCount(limit, offset, sortCol, sort, keywords)
        const totalDataNoLimit = await laporanAktivitasModel.getDataCountNoLimit(sortCol, sort, keywords)
        const totalDataTotal = await laporanAktivitasModel.getDataCountTotal(sortCol, keywords)
        const totalPage = Math.ceil(totalDataTotal / limit)
        console.log('totaldatatotal we', totalDataTotal);

        const pageInfo = { page, totalPage, limit, totalData, totalDataNoLimit }
        // const result = await laporanAktivitasModel.getDataAllLaporanAktivitas(limit, offset, keywords, sort)
        return helper.response(res, 200, 'Succes Get User Data', totalData, pageInfo)
      } else {
        const totalData = await laporanAktivitasModel.getDataCountTanggal(limit, offset, fromdate, todate, sortCol, sort, keywords)
        // const totalDataLength = parseInt(totalData.length)
        const totalDataNoLimit = await laporanAktivitasModel.getDataCountTanggalNoLimit(sortCol, sort, keywords, fromdate, todate)
        const totalDataTotal = await laporanAktivitasModel.getDataCountTanggalTotal(fromdate, todate, sortCol, keywords)

        const totalPage = Math.ceil(totalDataTotal.length / limit)
        console.log('heheheh', totalDataTotal);
        const pageInfo = { page, totalPage, limit, totalData, totalDataNoLimit }
        // const result = await laporanAktivitasModel.getDataAllLaporanAktivitas(limit, offset, keywords, sort)
        return helper.response(res, 200, 'Succes Get User Data', totalData, pageInfo)
      }
    } catch (error) {
      // return helper.response(res, 400, 'Bad Request', error)
      console.log(error);
    }
  },
  getLaporanTOday: async (req, res) => {
    try {
      let { page, limit, sort, sortCol, keywords } = req.query
      limit = limit || '10'
      page = page || '1'
      keywords = keywords || '%%'
      sortCol = sortCol || 'user_name'
      sort = sort || 'user_name DESC'

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit
      const totalData = await laporanAktivitasModel.getDataLaporanTodayTotal(sortCol, keywords)
      const result = await laporanAktivitasModel.getDataLaporanToday(limit, offset, sortCol, sort, keywords)
      const resultTodayNoLimit = await laporanAktivitasModel.getDataLaporanTodayNoLimit(sortCol, sort, keywords)

      const totalPage = Math.ceil(totalData / limit)
      const pageInfo = { page, totalPage, limit, totalData, resultTodayNoLimit }
      const datakosong = []
      result.forEach((item) => {
        if (item.logaktivitas_isi === null) {
          const setData = {
            user_name: item.user_name,
            user_nip: item.user_nip,
            user_pangkat: item.user_pangkat,
            logaktivitas_isi: 'Belum mengisi data hari ini',
            logaktivitas_created_at: item.logaktivitas_created_at,
            logaktivitas_image: item.logaktivitas_image
          }
          datakosong.push(setData)
        } else if (item.logaktivitas_isi !== null) {
          const setData = {
            user_name: item.user_name,
            user_nip: item.user_nip,
            user_pangkat: item.user_pangkat,
            logaktivitas_isi: item.logaktivitas_isi,
            logaktivitas_created_at: item.logaktivitas_created_at,
            logaktivitas_image: item.logaktivitas_image
          }
          datakosong.push(setData)
        }
      })
      if (datakosong.length > 0) {
        return helper.response(res, 200, 'Succes Get User Data', datakosong, pageInfo)
      } else {
        return helper.response(res, 404, 'Data not Found', null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
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
      let { page, limit, sort } = req.query
      limit = limit || '10'
      page = page || '1'
      sort = sort || 'logaktivitas_created_at DESC'

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit
      const { id } = req.params
      sort = sort || 'logaktivitas_created_at DESC'
      const result = await laporanAktivitasModel.getDataLaporanAktivitasByIdUser(id, sort, limit, offset)
      const totalDataTotal = await laporanAktivitasModel.getDataCountTotalByUserId(id, sort)
      const totalPage = Math.ceil(totalDataTotal / limit)
      const pageInfo = { page, totalPage, limit, totalDataTotal }
      if (result.length > 0) {
        return helper.response(res, 200, 'Succes Get User Data hehe', result, pageInfo)
      } else {
        return helper.response(res, 404, `Data By Id ${id} not Found`, null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  postLaporanAktivitasIfBlank: async (req, res) => {
    try {
      const datakosong = []
      const datakosongById = []
      let { page, limit, sort, sortCol, keywords } = req.query
      limit = limit || '10'
      page = page || '1'
      keywords = keywords || '%%'
      sortCol = sortCol || 'user_name'
      sort = sort || 'user_name DESC'

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit
      const result = await laporanAktivitasModel.getDataLaporanTodayNoLimit(sortCol, sort, keywords)
      // console.log('test blank', result);
      result.forEach((item) => {
        if (item.logaktivitas_isi === null) {
          const setData = {
            logaktivitas_user_id: item.id,
            logaktivitas_isi: 'Belum mengisi data hari ini',
            logaktivitas_image: item.logaktivitas_image
          }
          datakosong.push(setData)
          datakosongById.push(setData.logaktivitas_user_id)
        }
      })
      console.log('databarublank', datakosong)
      console.log('databarublankID', datakosongById.length)
      for (const e of datakosongById) {
        const setData2 = {
          logaktivitas_user_id: e,
          logaktivitas_isi: '--',
          logaktivitas_image: req.file ? req.file.filename : ''
        }
        // const resultlagi = await laporanAktivitasModel.createData(setData2)
        const result2 = await laporanAktivitasModel.createData(setData2)
        console.log('datasetdata 2', result2)
      }
    } catch (error) {
      // return helper.response(res, 400, 'Bad Request', error)
      console.log(error);
    }
    // =========================
    // try {
    //   // console.log('Controller', req)
    //   const {
    //     namaLengkap,
    //     isiAktivitas
    //     // ruangBuktiSuratDina
    //   } = req.body
    //   const setData = {
    //     logaktivitas_user_id: namaLengkap,
    //     logaktivitas_isi: isiAktivitas,
    //     logaktivitas_image: req.file ? req.file.filename : ''
    //   }
    //   console.log('POST DATA', setData)
    //   const checkLog = await laporanAktivitasModel.getDataCondition({
    //     logaktivitas_user_id: namaLengkap
    //   })
    //   // console.log('checklog', checkLog);
    //   if (checkLog.length === 0) {
    //     const result = await laporanAktivitasModel.createData(setData)
    //     return helper.response(res, 200, 'Succes Create Data', result)
    //   } else {
    //     return helper.response(res, 400, 'Anda Sudah Input Aktivitas Hari Ini')
    //   }
    // } catch (error) {
    //   return helper.response(res, 400, 'Bad Request', error)
    //   // console.log(error);
    // }
    // =========================
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
        logaktivitas_isi: isiAktivitas,
        logaktivitas_image: req.file ? req.file.filename : ''
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
          logaktivitas_image: req.file ? req.file.filename : result[0].logaktivitas_image,
          logaktivitas_updated_at: new Date(Date.now())
        }

        if (req.file) {
          console.log('ada file')
          if (result[0].logaktivitas_image.length > 0) {
            console.log(`Delete Image${result[0].logaktivitas_image}`)
            const imgLoc = `src/uploads/${result[0].logaktivitas_image}`
            helper.deleteImage(imgLoc)
          } else {
            console.log('NO img in DB')
          }
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
      console.log('wewewee', result)

      if (result.length > 0) {
        const imgLoc = `src/uploads/${result[0].logaktivitas_image}`
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
  }
}
