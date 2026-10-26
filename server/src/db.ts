import mysql from "mysql2/promise"

export const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"grievance_db"
})


db.getConnection()
    .then((connection) => {
        console.log("MySQL connected successfully");
        connection.release();
    })
    .catch((error) => {
        console.error("MySQL connection failed:", error.message);
    });
