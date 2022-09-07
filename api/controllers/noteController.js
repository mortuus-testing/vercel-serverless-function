const mongoose = require('mongoose')
const Note = require('../models/noteModel')

const getNotes = (req, res) => {
    Note.find(function(error, data) {
        if (error) {
            console.log("ERROR : " + error)
            res.status(500).send({message: 'Server error'})
        } else {
            res.status(200).send(data)
        }
    })
}

const getNote = (req, res, id) => {
    Note.findById({_id: id}, function (error, data) {
        if (error) {
            console.log("ERROR : " + error)
            res.status(500).send({message: 'Server error'})
        } else {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send({message: 'Not found'})
            }
        }
    })
}

const createNote = (req, res) => {
    if (req.body.title && req.body.content) {
        Note.create({
            id: mongoose.Types.ObjectId,
            title: req.body.title,
            content: req.body.content,
            finish: false,
            bookmark: false,
            deleted: false
        }, function (error, data) {
            if (error) {
                console.log("ERROR : " + error)
                res.status(500).send({message: 'Server error'})
            } else {
                res.status(201).send(data)
            }
        })
    } else {
        res.status(400).send({message: 'Missing body'})
    }
}

const updateNote = async (req, res, id) => {
    if (Object.keys(req.body).length == 0) {
        res.status(400).send({message: 'Missing body'})
    } else {
        Note.findOneAndUpdate({_id: id}, req.body, function (error, data) {
            if (error) {
                console.log("ERROR : " + error)
                res.status(500).send({message: 'Server error'})
            } else {
                if (data) {
                    res.send(Object.assign(data, req.body))
                } else {
                    res.status(404).send({message : 'Not found'})
                }
            }
        })
    }
}

const deleteNote = (req, res, id) => {
    Note.findByIdAndDelete(id, function (error, data) {
        if (error) {
            console.log("ERROR : " + error)
            res.status(500).send({message: 'Server error'})
        } else {
            res.status(200).send(data)
        }
    })
}

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}
