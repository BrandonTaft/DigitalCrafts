const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

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

const connectionString = 'postgres://ezjdkqtc:OcnjN7bG8NqwPE-5hyA10m_Yh1UI1Mh-@chunee.db.elephantsql.com/ezjdkqtc'
const db = pgp(connectionString)

const bcrypt = require('bcryptjs')

const authentication = require('./authentication/auth')
const { REPL_MODE_SLOPPY } = require('repl')

let movies = []

app.get('/movies', (req, res) => {

    models.Movie.findAll({})
    .then(movies => {
        res.render('movies', {movies: movies})
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
        res.render('movies', {movies: movies})
    })

})

app.post('add-movie', (req,res) => {
  //get this info from text boxes  
    const movie_title = req.body.movie_title
    const movie_description = req.body.movie_description
    const movie_genre = req.body.movie_genre
  //create movie object  
    const movie = models.Movie.build({
        movie_title: movie_title, 
        description: description,
        genre: genre })
  // save the movie 
     movie.save().then(savedMovie => {
     console.log(savedMovie)
     res.redirect('/movies') })

})


app.listen(3000, () => {
    console.log('Server is running...')
})