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
  getUserData: (userId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM waitinglist_ruangan WHERE id_peminjam = ?',
        userId,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataAllTanpaFill: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM waitinglist_ruangan',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataAll: (limit, offset, keywords, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM waitinglist_ruangan WHERE booking_ruangan_nama LIKE ? ORDER BY ${sort} LIMIT ? OFFSET ?`,
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
        'SELECT COUNT(*) AS total FROM waitinglist_ruangan WHERE booking_ruangan_nama LIKE ?',
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
        'SELECT * FROM waitinglist_ruangan WHERE id = ?',
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
      connection.query('INSERT INTO waitinglist_ruangan SET ?', setData, (error, result) => {
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
        'UPDATE waitinglist_ruangan SET ? WHERE id = ?',
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
        'DELETE FROM waitinglist_ruangan WHERE id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getDataCondition: (ruangYangDigunakan, d1Getime1, ruangWaktuMulai, ruangWaktuAkhir) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM waitinglist_ruangan WHERE booking_ruangan_ruangan = ?  AND booking_ruangan_tanggal = ? AND booking_ruangan_waktu_penggunaan_akhir >= ? AND booking_ruangan_waktu_penggunaan_awal <= ? ', [ruangYangDigunakan, d1Getime1, ruangWaktuMulai, ruangWaktuAkhir], (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getDataConditionBooking: (ruangYangDigunakan, ruangTanggalBooking, ruangWaktuMulai, ruangWaktuAkhir, ruangTanggalBookingAkhir) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM booking_ruangan WHERE booking_ruangan_ruangan = ?  AND booking_ruangan_tanggal = ? AND booking_ruangan_waktu_penggunaan_akhir >= ? AND booking_ruangan_waktu_penggunaan_awal <= ?  ', [ruangYangDigunakan, ruangTanggalBooking, ruangWaktuMulai, ruangWaktuAkhir], (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getDataConditionLebihSatu: (ruangYangDigunakan, ruangTanggalBooking, ruangTanggalBookingAkhir) => {
    const a = 1
    console.log('hehe', a)
    console.log('hehe', ruangYangDigunakan)
    console.log('hehe', ruangTanggalBooking)
    // console.log('hehe', ruangWaktuMulai)
    // console.log('hehe', ruangWaktuAkhir)
    console.log('hehe', ruangTanggalBookingAkhir)
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM waitinglist_ruangan WHERE booking_ruangan_ruangan = ? AND booking_ruangan_tanggal = ? AND booking_ruangan_waktu_penggunaan_awal < ? AND booking_ruangan_waktu_penggunaan_akhir > ?', [ruangYangDigunakan, ruangTanggalBooking, ruangTanggalBookingAkhir], (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getDataConditionBookingLebihSatu: (ruangYangDigunakan, d1Getime1, ruangWaktuMulai, ruangWaktuAkhir) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM booking_ruangan WHERE booking_ruangan_ruangan = ?  AND booking_ruangan_tanggal = ? AND booking_ruangan_waktu_penggunaan_akhir >= ? AND booking_ruangan_waktu_penggunaan_awal <= ?  ', [ruangYangDigunakan, d1Getime1, ruangWaktuMulai, ruangWaktuAkhir], (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  }
}
