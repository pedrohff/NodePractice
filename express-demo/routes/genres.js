const express = require('express')
const router = express.Router()

const genres = [
    {id: 1, name: "genre1"},
    {id: 2, name: "genre2"},
    {id: 3, name: "genre3"}
]

router.get('/', (req,res) => {
    res.send(genres)
})

router.post('/', (req,res) => {
    const {error} = validateGenre(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }

    genres.push(genre)
    res.send(genre)
})

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(genre, schema)
}


module.exports = router