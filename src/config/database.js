require("dotenv").config();
const mysql = require("mysql2/promise");
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER, //empty
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATANAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
});
module.exports = connection;
