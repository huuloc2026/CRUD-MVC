const connection = require("../config/database");
const getAllUsers = async () => {
  const syntaxSQL = `Select * from Persons`;
  const [rows, fields] = await connection.query(syntaxSQL);
  return rows;
};
module.exports = {
  getAllUsers,
};
