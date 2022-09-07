require('dotenv').config()
require('./config/db')()
const express = require('express')
const notesRouter = require('./routes/noteRouter')
const cors = require('cors')

const app = express()
app.use(cors({
	origin: '*'
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("The server is up and running")
})
app.use('/api', notesRouter)

module.exports = app;
