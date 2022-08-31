const helper = require('../../helpers')
const userModel = require('./user_model')
const bcrypt = require('bcrypt')
// ssss
module.exports = {
  updateUserProfile: async (req, res) => {
    try {
      const userId = req.decodeToken.user_id
      const userProfileImage = req.decodeToken.user_profile_image
      // console.log('holahol', userId)
      const { firstName, lastName, userPhoneNumber } = req.body
      const setData = {
        user_name: firstName + ' ' + lastName,
        user_phone_number: userPhoneNumber,
        user_profile_image: req.file ? req.file.filename : ''
      }
      // console.log('Data', setData)

      const imgLoc = `src/uploads/${userProfileImage}`
      helper.deleteImage(imgLoc)

      const result = await userModel.updateProfile(setData, userId)
      return helper.response(
        res,
        200,
        'Succes Update Profile (Please get New token) !',
        result
      )
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getShowTimeById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await userModel.getDataById(id)

      if (result.length > 0) {
        return helper.response(res, 200, `Succes Get Data by Id ${id}`, result)
      } else {
        return helper.response(res, 404, `Data by Id ${id} not Found !`, null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getAllUserTanpaFill: async (req, res) => {
    try {
      let { page, limit, sort, sortCol, keywords } = req.query
      limit = limit || '5'
      page = page || '1'
      keywords = keywords || '%%'
      sortCol = sortCol || 'user_name'
      sort = sort || 'user_name DESC'

      page = parseInt(page)
      limit = parseInt(limit)
      const offset = page * limit - limit
      const totalData = await userModel.getDataCount(sortCol, keywords)
      const result = await userModel.getDataAllTanpaFill(limit, offset, sortCol, sort, keywords)

      const totalPage = Math.ceil(totalData / limit)
      const pageInfo = { page, totalPage, limit, totalData }

      return helper.response(res, 200, 'Succes Get User Data hehe', result, pageInfo)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
      // console.log(error);
    }
  },
  register: async (req, res) => {
    console.log('huhuhu')
    try {
      // console.log(req.body)
      const {
        NamaLengkapPeminjam,
        userName,
        email,
        nohp,
        password,
        userRole,
        userVerif,
        userUnitKerja
      } = req.body

      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(password, salt)
      // console.log(`before Encrypt = ${userPassword}`)
      // console.log(`after Encrypt = ${encryptPassword}`)

      const setData = {
        user_name: NamaLengkapPeminjam,
        user_username: userName,
        user_password: encryptPassword,
        user_email: email,
        user_phone_number: nohp,
        user_role: userRole,
        user_verification: userVerif,
        user_unit_kerja: userUnitKerja
      }
      console.log(setData)

      const checkEmailUser = await userModel.getDataCondition({
        user_email: email
      })

      const checkUserName = await userModel.getDataCondition({
        user_username: userName
      })
      console.log('chec email', checkEmailUser)
      console.log('chec username', checkUserName)

      if (checkEmailUser.length === 0) {
        if (checkUserName.length === 0) {
          const result = await userModel.register(setData)
          delete result.user_password

          return helper.response(
            res,
            200,
            'Succes register !',
            result
          )
        } else {
          return helper.response(res, 400, 'Username has been registered')
        }
      } else {
        return helper.response(res, 400, 'Email has been registered')
      }
    } catch (error) {
      // return helper.response(res, 400, 'Bad Request', error)
      console.log(error)
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params
      // kondisi pengecekan apakah data ada dalam database berdasarakan id
      let result = await userModel.getDataById(id)
      // console.log(result[0], '--', req.file)

      if (result.length > 0) {
        const {
          NamaLengkapPeminjam,
          userName,
          email,
          nohp,
          password,
          userRole,
          userVerif,
          userUnitKerja
        } = req.body
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(password, salt)
        const setData = {
          user_name: NamaLengkapPeminjam,
          user_username: userName,
          user_email: email,
          user_phone_number: nohp,
          user_password: encryptPassword,
          user_role: userRole,
          user_verification: userVerif,
          user_unit_kerja: userUnitKerja,
          user_updated_at: new Date(Date.now())
        }

        // if (req.file) {
        //   console.log('ada file')
        //   if (result[0].booking_ruangan_surat_dinas.length > 0) {
        //     console.log(`Delete Image${result[0].booking_ruangan_surat_dinas}`)
        //     const imgLoc = `src/uploads/${result[0].booking_ruangan_surat_dinas}`
        //     helper.deleteImage(imgLoc)
        //   } else {
        //     console.log('NO img in DB')
        //   }
        // }
        // console.log('UPDATE DATA', req.body)
        // console.log(setData)
        // console.log('MOVIE IMAGE DB', result[0].movie_image.length)

        result = await userModel.updateData(setData, id)
        return helper.response(res, 200, 'Succes Update User', result)
      } else {
        return helper.response(
          res,
          404,
          `Cannnot Update !. Data by Id ${id} not Found !`,
          null
        )
      }
    } catch (error) {
      // return helper.response(res, 400, 'Bad Request', error)
      console.log(error);
    }
  },
  deletedUSer: async (req, res) => {
    try {
      // console.log(req.params)
      const { id } = req.params
      let result = await userModel.getDataById(id)
      // console.log(result)

      if (result.length > 0) {
        const imgLoc = `src/uploads/${result[0].movie_image}`
        helper.deleteImage(imgLoc)
        result = await userModel.deleteData(id)
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
  getByIdUser: async (req, res) => {
    try {
      const { id } = req.params
      const result = await userModel.getDataById(id)

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
  updateUserLaporan: async (req, res) => {
    console.log('req bodyay', req.body);
    try {
      const { id } = req.params
      let result = await userModel.getDataById(id)

      if (result.length > 0) {
        const {
          userNama,
          userNIP,
          userPangkat,
          userUnitKerja,
          usernoHP,
          userEmail,
          userPasswordRegis,
          dropDownValRole
        } = req.body
        console.log('de', result[0].user_password)
        console.log('de', userPasswordRegis)
        console.log('de', userNIP)
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(userPasswordRegis, salt)
        console.log('crypt pass', encryptPassword)

        const setData = {
          user_nip: userNIP,
          user_name: userNama,
          user_pangkat: userPangkat,
          user_unit_kerja: userUnitKerja,
          user_email: userEmail,
          user_phone_number: usernoHP,
          user_password: userPasswordRegis === '' ? result[0].user_password : encryptPassword,
          user_role: dropDownValRole,
          user_updated_at: new Date(Date.now())
        }
        console.log('setsetdata', setData);
        result = await userModel.updateData(setData, id)
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
      // return helper.response(res, 400, 'Bad Request', error)
      console.log(error);
    }
  }
}
