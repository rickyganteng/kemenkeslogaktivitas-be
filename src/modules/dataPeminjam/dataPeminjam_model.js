const connection = require('../../config/mysql')

module.exports = {
  movieName: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT movie_id, movie_name, movie_image FROM movie',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataAll: (limit, offset, keywords, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM ruangan WHERE namaruang_r LIKE ? ORDER BY ${sort} LIMIT ? OFFSET ?`,
        [keywords, limit, offset],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },

  getDataCount: (keywords) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total FROM ruangan WHERE namaruang_r LIKE ?',
        keywords,
        (error, result) => {
          // console.log(result) isi array dalamnya objek
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  },
  getDataById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM ruangan WHERE id_r = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
          // console.log(result)
        }
      )
    })
  },
  getDataFasById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM fasilitas_ruangan WHERE id_r = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
          // console.log(result)
        }
      )
    })
  },
  getDataByIdFasById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM fasilitas_ruangan WHERE fasilitas_ruangan_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
          // console.log(result)
        }
      )
    })
  },
  createData: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO ruangan SET ?', setData, (error, result) => {
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
  createDataFasilitas: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO fasilitas_ruangan SET ?',
        setData,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  updateData: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE fasilitas_ruangan SET ? WHERE fasilitas_ruangan_id = ?',
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
  updateDataRuangan: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE ruangan SET ? WHERE id_r = ?',
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
        'DELETE FROM ruangan WHERE id_r = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
