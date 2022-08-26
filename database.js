const { Client } = require("pg")

const db = new Client({
    ssl: {
        rejectUnauthorized: false
    },
    connectionString:
        "postgres://nidmjxwlshfuwg:c859b14132e01fa8bdf53fccb6e431b32567f3099645347e00a46d7ea0b162dd@ec2-99-80-170-190.eu-west-1.compute.amazonaws.com:5432/dbd9p1ktkmkes8"
});


db.connect();

const messageTable = `CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    room TEXT,
    username TEXT,
    message TEXT NOT NULL,
    date TIMESTAMP

);`;


const roomTable = `CREATE TABLE IF NOT EXISTS rooms (
    id SERIAL PRIMARY KEY,
    username TEXT,
    room TEXT

);`;

db.query(roomTable, err => {

    if (err) {
        console.error(err.message)
        console.log("Table already exists")
        return
    }
    else {
        console.log("Created Room table")

    }
})

db.query(messageTable, err => {

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
