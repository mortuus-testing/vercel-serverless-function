require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'NoteApp'
        })
        console.log(`Connected to database : ${conn.connection.host}`)
    } catch (error) {
        console.log("Failed to establish connnection to database!")
        console.log("ERROR : " + error)
    }
}

module.exports = connectDB