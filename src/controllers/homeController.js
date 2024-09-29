const express = require("express");
const connection = require("../config/database");
const { getAllUsers, getUserbyID } = require("../services/CRUDservice");
//
const getHomepage = async (req, res) => {
  let rows = await getAllUsers();
  return res.render("home.ejs", { listResult: rows });
};

const postCreateNewUser = async (req, res) => {
  let lastName = req.body.inputLastName;
  let firstName = req.body.inputFirstName;
  let email = req.body.inputEmail;
  let address = req.body.inputAddress;
  let city = req.body.inputCity;
  const syntaxSQL = `INSERT INTO Persons (LastName, email, FirstName, Address, City) VALUES (?, ?, ?, ?, ?)`;

  try {
    const [rows, fields] = await connection.query(syntaxSQL, [
      lastName,
      email,
      firstName,
      address,
      city,
    ]);
    return res.send("Success");
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred");
  }
};
const getCreateNewUser = (req, res) => {
  return res.render("create.ejs");
};

const UpdateNewUser = async (req, res) => {
  const userID = req.params.userID;
  let user = await getUserbyID(userID);

  return res.render("update.ejs", { userUpdate: user });
};

module.exports = {
  getHomepage,
  getCreateNewUser,
  postCreateNewUser,
  UpdateNewUser,
};
