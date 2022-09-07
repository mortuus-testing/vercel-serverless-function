const app = require('express')()

app.get('/', (req, res) => {
    res.send({
	status: 200,
	message: 'Success'
    })
})

module.exports = app;
