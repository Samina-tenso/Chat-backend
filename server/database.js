const { Client } = require("pg")

const db = new Client({
    ssl: {

    },
    connectionString:
        process.env, DATABASE_URL
});
db.connect();

const roomTable = `CREATE TABLE IF NOT EXISTS Rooms(
    Room_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    RoomName VARCHART(100) NOT NULL,
    Username VARCHAR(100) NOT NULL

);`;

const messagesTable = `CREATE TABLE IF NOT EXISTS Messages(
    Room_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    room VARCHART(100) NOT NULL,
    userName VARCHART(100) NOT NULL,
    message VARCHAR(100) NOT NULL,
    time TIME
);`;

db.run(roomTable, err => {

    if (err) {
        console.error(err.message)
        console.log("Table already exists")
        return
    }
    else {
        console.log("Created Room table")

    }
})

db.run(messagesTable, err => {

    if (err) {
        console.error(err.message)
        console.log("Table already exists")
        return
    }
    else {
        console.log("Created Messages table")

    }
})
module.exports = db
