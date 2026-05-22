require("dotenv").config();
const mysql = require("mysql2");

const isLocal = process.env.NODE_ENV === "online";

const db = mysql.createConnection({
  host: isLocal
    ? process.env.LOCAL_DB_HOST
    : process.env.ONLINE_DB_HOST,

  port: isLocal
    ? undefined
    : process.env.ONLINE_DB_PORT,

  user: isLocal
    ? process.env.LOCAL_DB_USER
    : process.env.ONLINE_DB_USER,

  password: isLocal
    ? process.env.LOCAL_DB_PASSWORD
    : process.env.ONLINE_DB_PASSWORD,

  database: isLocal
    ? process.env.LOCAL_DB_NAME
    : process.env.ONLINE_DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = db;