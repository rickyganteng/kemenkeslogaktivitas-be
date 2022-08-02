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
  getDataAllTanpaFill: (keywords) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM laporan_ruangan WHERE booking_ruangan_unitkerja LIKE ?',
        [keywords],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataAllTanggal: (searchtanggal, fromdate, todate) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM laporan_ruangan WHERE booking_ruangan_unitkerja LIKE ? AND booking_ruangan_tanggal BETWEEN ? AND ?',
        [searchtanggal, fromdate, todate],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataAll: (limit, offset, keywords, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM laporan_ruangan WHERE booking_ruangan_nama LIKE ? ORDER BY ${sort}`,
        [keywords, limit, offset],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getUserData: (userId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM laporan_ruangan WHERE id_peminjam = ?',
        userId,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataCount: (keywords) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total FROM laporan_ruangan WHERE booking_ruangan_nama LIKE ?',
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
        'SELECT * FROM laporan_ruangan WHERE id = ?',
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
      connection.query('INSERT INTO laporan_ruangan SET ?', setData, (error, result) => {
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
  updateData: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE laporan_ruangan SET ? WHERE id = ?',
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
        'DELETE FROM laporan_ruangan WHERE id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
