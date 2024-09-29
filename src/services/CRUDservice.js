const connection = require("../config/database");
const getAllUsers = async () => {
  const syntaxSQL = `Select * from Persons`;
  const [rows, fields] = await connection.query(syntaxSQL);
  return rows;
};
const getUserbyID = async (userID) => {
  const [rows, fields] = await connection.query(
    `Select * from Persons where PersonID = ?`,
    [userID]
  );
  let user = rows && rows.length > 0 ? rows[0] : {};
  return user;
};
module.exports = {
  getAllUsers,
  getUserbyID,
};
