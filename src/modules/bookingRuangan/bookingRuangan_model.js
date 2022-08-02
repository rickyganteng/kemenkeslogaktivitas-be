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
  getUserData: (userId, limit, offset, keywords, sort) => {
    console.log('qq', limit);
    console.log('ololo', userId);
    console.log(offset);
    console.log(keywords);
    console.log(sort)
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM booking_ruangan WHERE id_peminjam = ?',
        [userId],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataAllTanpaFill: (keywords, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM booking_ruangan WHERE booking_ruangan_unitkerja LIKE ? ORDER BY ${sort}`,
        [keywords],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataAll: (limit, offset, keywords, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM booking_ruangan WHERE booking_ruangan_nama LIKE ? ORDER BY ${sort}`,
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
        'SELECT COUNT(*) AS total FROM booking_ruangan WHERE booking_ruangan_nama LIKE ?',
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
        'SELECT * FROM booking_ruangan WHERE id = ?',
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
      connection.query('INSERT INTO booking_ruangan SET ?', setData, (error, result) => {
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
        'UPDATE booking_ruangan SET ? WHERE id = ?',
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
        'DELETE FROM booking_ruangan WHERE id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataCondition: (ruangYangDigunakan, ruangTanggalBooking, ruangWaktuMulai, ruangWaktuAkhir) => {
    console.log('tuto', ruangYangDigunakan)
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM booking_ruangan WHERE booking_ruangan_ruangan = ? AND booking_ruangan_tanggal = ? AND booking_ruangan_waktu_penggunaan_awal < ? AND booking_ruangan_waktu_penggunaan_akhir > ? ', [ruangYangDigunakan, ruangTanggalBooking, ruangWaktuAkhir, ruangWaktuMulai], (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  }
}
