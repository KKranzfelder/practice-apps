const db = require ('./db.js');
const mysql2 = require()

getUserData = (s_id) => {
  return db.queryAsync('SELECT * FROM Users WHERE s_id = ?;');
};

getAddressData = (userId) => {
  return db.queryAsync('SELECT * FROM Addresses WHERE id = ?;');
};

getCardData = (userId) => {
  return db.queryAsync('SELECT * FROM Cards WHERE id = ?;');
};

postUserData = (data) => {
  return db.queryAsync('INSERT INTO User VALUES ?', [data])
};

postAddressData = (data) => {
  return db.queryAsync('INSERT INTO Addresses VALUES ?', [data]);
};

postCardData = (data) => {
  return db.queryAsync('INSERT INTO Cards VALUES ?', [data]);
};


module.exports = {
  getUserData,
  getAddressData,
  getCardData,
  postUserData,
  postAddressData,
  postCardData,
}