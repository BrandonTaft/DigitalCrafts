const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const models = require('./models')
const { Op } = require('sequelize')
global.models = require('./models')

const moviesRouter = require('./routes/movies')



app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')

app.use(express.urlencoded())

app.use(session({
    secret: 'SECRETKEY',
    saveUninitialized: true,
    resave: false
}))

const bcrypt = require('bcryptjs')

const authentication = require('./authentication/auth')
const { REPL_MODE_SLOPPY } = require('repl')

let movies = []

app.get('/movies', (req, res) => {

    models.Movie.findAll({})
        .then(movies => {
            res.render('movies', { movies: movies })
        })
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/add-movie', (req, res) => {
    res.render('add-movie')
})

app.post('add-movie', (req, res) => {
    //get this info from text boxes  
    const movie_title = req.body.name
    const movie_description = req.body.description
    const movie_genre = req.body.genre
    const rating = req.body.rating
    const id = parseInt(req.body.id) 

    //create movie object  
    const movie = models.Movie.build({
        movie_title: movie_title,
        description: description,
        genre: genre
    })
    // save the movie 
    movie.save().then(savedMovie => {
        console.log(savedMovie)
        res.redirect('/add-movie')
    })

})

app.get('/movies/:genre', (req, res) => {
    const genre = req.params.genre
    models.Movie.findAll({
        where: {
            genre: {
                [Op.iLike]: genre
            }
        }
    }).then(movies => {
        res.render('movies', { movies: movies })
    })

})


app.listen(3000, () => {
    console.log('Server is running...')
})