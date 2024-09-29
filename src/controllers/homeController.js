const express = require("express");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserbyID,
  updateUserByID,
  deleteUserbyID,
} = require("../services/CRUDservice");
//
const getHomepage = async (req, res) => {
  let rows = await getAllUsers();
  return res.render("home.ejs", { listResult: rows });
};

const getCreateNewUser = (req, res) => {
  return res.render("create.ejs");
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

    return res.redirect("/");
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred");
  }
};

const getUpdateNewUser = async (req, res) => {
  const userID = req.params.userID;
  let user = await getUserbyID(userID);

  return res.render("update.ejs", { userUpdate: user });
};
const postUpdateUser = async (req, res) => {
  let lastName = req.body.inputLastName;
  let firstName = req.body.inputFirstName;
  let email = req.body.inputEmail;
  let address = req.body.inputAddress;
  let city = req.body.inputCity;
  let userID = req.body.UserID;
  updateUserByID(lastName, email, firstName, address, city, userID);
  return res.redner("sucess.ejs");
};
const postDeleteUser = async (req, res) => {
  const userID = req.params.userID;
  let user = await getUserbyID(userID);
  return res.render("delete.ejs", { userUpdate: user });
};
const postHandleSubmitDel = async (req, res) => {
  const userID = req.body.UserID;

  await deleteUserbyID(userID);

  return res.redirect("/");
};

module.exports = {
  getHomepage,
  getCreateNewUser,
  postCreateNewUser,
  getUpdateNewUser,
  postUpdateUser,
  postDeleteUser,
  postHandleSubmitDel,
};
