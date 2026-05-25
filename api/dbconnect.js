require("dotenv").config();
const mysql = require("mysql2");

const isLocal = process.env.NODE_ENV === "online";
const db = mysql.createConnection({
  host: isOnline ? process.env.ONLINE_DB_HOST : process.env.LOCAL_DB_HOST,
  user: isOnline ? process.env.ONLINE_DB_USER : process.env.LOCAL_DB_USER,
  password: isOnline ? process.env.ONLINE_DB_PASSWORD : process.env.LOCAL_DB_PASSWORD,
  database: isOnline ? process.env.ONLINE_DB_NAME : process.env.LOCAL_DB_NAME,
  port: isOnline ? process.env.ONLINE_DB_PORT : 3306,
});
 
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = db;