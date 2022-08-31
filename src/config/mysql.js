const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "ricky",
//   password: "P@ssw0rd!",
//   database: "testingadmin"
// })

connection.connect((error) => {
  if (error) throw error
  console.log("You're now Connected...")
})

module.exports = connection
