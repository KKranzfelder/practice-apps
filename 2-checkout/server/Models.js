const db = require ('./db.js');
const mysql2 = require('mysql2');

getUserData = (s_id) => {
  return db.queryAsync('SELECT * FROM Users WHERE s_id = ?;', s_id);
};

getAddressData = (userId) => {
  return db.queryAsync('SELECT * FROM Addresses WHERE id = ?;');
};

getCardData = (userId) => {
  return db.queryAsync('SELECT * FROM Cards WHERE id = ?;');
};

postUserData = (data) => {
  console.log(data);
  return db.queryAsync('INSERT INTO Users (s_id, name, email, PW, HasCO) VALUES (?);', [data]);
};

postAddressData = (data) => {
  return db.queryAsync('INSERT INTO Addresses (user, line_1, ine_2, city, state, zip) VALUES (?);', [data]);
};

postCardData = (data) => {
  return db.queryAsync('INSERT INTO Cards (user, ccNum, cc_exp, CCV) (user, ccNum, cc_exp, CCV) VALUES (?)', [data]);
};


module.exports = {
  getUserData,
  getAddressData,
  getCardData,
  postUserData,
  postAddressData,
  postCardData,
}