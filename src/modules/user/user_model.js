const connection = require('../../config/mysql')

module.exports = {
  updateProfile: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user SET ? WHERE user_id = ?',
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
  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (error, result) => {
        if (!error) {
          const newResult = {
            id: result.insertId,
            ...data
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getDataById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  updateData: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user SET ? WHERE id = ?',
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
  getDataAllTanpaFill: (limit, offset, sortCol, sort, keywords) => {
    return new Promise((resolve, reject) => {
      const sqlquery = `SELECT * FROM user WHERE ${sortCol} LIKE '${keywords}' ORDER BY ${sort} LIMIT ${limit} OFFSET ${offset}`
      connection.query(
        sqlquery,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataCondition: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE ?', data, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getDataCount: (sortCol, keywords) => {
    return new Promise((resolve, reject) => {
      const sqlquery = `SELECT COUNT(*) AS total FROM user WHERE ${sortCol} LIKE '${keywords}'`
      connection.query(
        sqlquery,
        keywords,
        (error, result) => {
          // console.log(result) isi array dalamnya objek
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  },
  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM user WHERE id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
