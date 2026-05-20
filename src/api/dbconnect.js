const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "food_store",
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;