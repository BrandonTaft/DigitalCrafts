const express = require('express')
const router = express.Router() 

router.get('/add-movie', (req, res) => {
    res.render('add-movie')
})

// /movies/add-movie app.get
router.post('/add-movie', (req, res) => {

    const name = req.body.name 
    const description = req.body.description
    const genre = req.body.genre
    const rating = req.body.rating
    const id = parseInt(req.body.id) 

    const movie = models.Movies.build({
        name: name, 
        description: description, 
        genre: genre,
        rating: rating,
        id: id 
    })

    movie.save().then(results => {
        res.redirect('/add-movies')
    })

})

module.exports = router 