
const db = require("./database")


async function insertMessage(room, message, userName, date) {
    try {
        const sql = "INSERT INTO messages (room, user, message, date ) VALUES (?,?,?,?)";
        const result = await db.query(sql, [room, userName, message, date])
        console.log("message added")
        return result.rows
    } catch (error) {
        console.log(error.message)
        console.log("not working")
    }

}


async function joinRoom(userName, room) {
    try {
        const sql = "INSERT INTO rooms ( room, user) VALUES (?,?)";
        const result = await db.query(sql, [userName, room])
        console.log("user added to room")
        return result.rows
    } catch (error) {
        console.log(error.message)
        console.log("not working")
    }
}

async function deleteRoom(room) {
    try {
        const sql = "DELETE FROM messages WHERE room = (?);"
        const result = await db.query(sql, [room])
        console.log("room and messages deleted")
        return result.rows
    } catch (error) {
        console.log(error.message)
        console.log("not working")
    }
}

async function getMessages(room) {
    try {
        const sql = "SELECT * FROM Messages WHERE room = (?)";
        const result = await db.query(sql, [room])
        console.log("messages were retrived")
        return result.rows
    } catch (error) {
        console.log(error.message)
        console.log("notworking")
    }
}

module.exports = { joinRoom, insertMessage, deleteRoom, getMessages }
