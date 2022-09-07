const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title : String,
    content: String,
    finish: Boolean,
    bookmark: Boolean,
    deleted: Boolean
})

// The "note" will be used as the collection name
// The collection name will be "posts"
module.exports = mongoose.model('note', noteSchema)