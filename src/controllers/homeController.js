const express = require("express");
const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDservice");
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

    console.log("Result is", rows);
    return res.send("Success");
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred");
  }
};
const getCreateNewUser = (req, res) => {
  return res.render("create.ejs");
};
const getDataTable = (req, res) => {
  return res.render("databasetable.ejs");
};

module.exports = {
  getHomepage,
  getDataTable,
  getCreateNewUser,
  postCreateNewUser,
};
