const { Router } =  require('express')
const router = Router()
const { createNote, getNotes, getNote, updateNote, deleteNote } = require('../controllers/noteController')

router.get('/notes', (req, res) => {getNotes(req, res)})
router.post('/notes', (req, res) => {createNote(req, res)})

router.get('/notes/:id', (req, res) => {getNote(req, res, req.params.id)})
router.put('/notes/:id', (req, res) => {updateNote(req, res, req.params.id)})
router.delete('/notes/:id', (req, res) => {deleteNote(req, res, req.params.id)})

module.exports = router