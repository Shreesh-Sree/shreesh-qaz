// Run: npm install mysql2 && node b-app.js
const mysql = require("mysql2/promise");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));
async function main() {
  let db;
  try {
    db = await mysql.createConnection({
      host: "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: "supermarket",
    });
    console.log("ONLINE SUPERMARKET");
    const [rows] = await db.execute(
      "SELECT id,name,brand,price FROM products ORDER BY price ASC",
    );
    console.log("Products Sorted by Price");
    console.table(rows);
  } catch (err) {
    console.error("Database error:", err.message);
  } finally {
    if (db) await db.end();
    rl.close();
  }
}
main();
