require("dotenv").config();
const express = require("express");

const configViewEngine = require("./config/viewEngine");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoute = require("./routes/web");
const mysql = require("mysql2");
//config template engine
configViewEngine(app);

// khai bao route
app.use("/", webRoute);

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER, //empty
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATANAME,
});
connection.query(
  "SELECT * FROM Persons p where `City` = 'ho chi minh' ",
  function (error, result, fields) {
    console.log(result);
    // console.log(fields);
  }
);
// const [results, fields] = connection.query("SELECT * FROM Persons p ");

app.listen(port, hostname, () => {
  console.log(`Example app listening at ${hostname} on port ${port}`);
});
