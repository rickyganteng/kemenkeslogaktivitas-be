const connection = require('../../config/mysql')

module.exports = {
  getDataAllLaporanAktivitas: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT u.user_nip, u.user_name, l.logaktivitas_id, l.logaktivitas_isi, l.logaktivitas_created_at FROM logaktivitas l JOIN user u ON l.logaktivitas_user_id = u.id',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  createData: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO logaktivitas SET ?', setData, (error, result) => {
        // !error ? resolve({result.insertId, ...setData}) : reject(new Error(error))
        if (!error) {
          const newResult = {
            id: result.insertId,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getDataByIdLaporanAktivitas: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT u.user_nip, u.user_name, l.logaktivitas_id, l.logaktivitas_isi, l.logaktivitas_created_at FROM logaktivitas l JOIN user u ON l.logaktivitas_user_id = u.id WHERE l.logaktivitas_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataLaporanAktivitasByIdUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT u.user_nip, u.user_name, l.logaktivitas_id, l.logaktivitas_isi, l.logaktivitas_created_at FROM logaktivitas l JOIN user u ON l.logaktivitas_user_id = u.id WHERE u.id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataByIdLaporanAktivitasUpdate: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM logaktivitas WHERE logaktivitas_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
          // console.log(result)
        }
      )
    })
  },
  updateData: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE logaktivitas SET ? WHERE logaktivitas_id = ?',
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id: id,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM logaktivitas WHERE logaktivitas_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getAfterDataNow: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM logaktivitas WHERE DATE(logaktivitas_created_at) = CURDATE()',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getNotAfterDataNow: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM logaktivitas WHERE NOT DATE(logaktivitas_created_at) = CURDATE()',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataLaporanToday: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT user.user_name,user.user_nip, user_pangkat, logaktivitas.logaktivitas_isi, logaktivitas.logaktivitas_created_at FROM logaktivitas RIGHT JOIN user ON user.id = logaktivitas.logaktivitas_user_id AND DATE(logaktivitas.logaktivitas_created_at) = CURDATE()',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataCondition: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM logaktivitas WHERE DATE(logaktivitas_created_at) = CURDATE() AND ?', data, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getDataCount: (limit, offset, sortCol, sort, keywords) => {
    return new Promise((resolve, reject) => {
      const sqlquery = `SELECT l.logaktivitas_id, u.user_nip, u.user_name, u.user_pangkat, l.logaktivitas_isi, l.logaktivitas_created_at FROM logaktivitas l JOIN user u ON l.logaktivitas_user_id = u.id WHERE u.${sortCol} LIKE '${keywords}' ORDER BY ${sort} LIMIT ${limit} OFFSET ${offset}`
      console.log('dwdwd', sqlquery)
      connection.query(
        sqlquery,
        (error, result) => {
          // console.log(result) isi array dalamnya objek
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
