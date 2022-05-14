const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    Promise.all([
      db.queryAsync(
      `CREATE TABLE IF NOT EXISTS Users (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        s_id VARCHAR(60),
        name VARCHAR(50),
        email VARCHAR(200),
        PW VARCHAR (25),
        address INT,
        card INT,
        hasCO VARCHAR(10)
        );`),

    db.queryAsync(
        `CREATE TABLE IF NOT EXISTS Addresses (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          user INT ,
          line_1 VARCHAR(255),
          line_2 VARCHAR(255),
          city VARCHAR(100),
          state VARCHAR(40),
          zip INT,
          FOREIGN KEY (user) REFERENCES Users (id)
        );`),

    db.queryAsync(
        `CREATE TABLE IF NOT EXISTS Cards (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          user INT ,
          ccNum VARCHAR(24),
          cc_exp VARCHAR(7),
          CCV INT,
          FOREIGN KEY (user) REFERENCES Users (id)
        );`)
        ])
  )
  .catch ((err) => console.log(err));

module.exports = db;
