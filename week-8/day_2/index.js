const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const app = express()
const pgp = require('pg-promise')()



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

let movies = []
app.get('/login', (req, res) => {
    
})
app.post('/login', (req, res) => {
    const { username, password } = req.body

    db.one('SELECT user_id, username, password  FROM users WHERE username = $1', [username])
        .then((user) => {
            bcrypt.compare(password, user.password, function(error, result) {
                if (result) {
                    if (req.session) {
                        req.session.user_id = user.user_id
                        req.session.username = username
                    }
                    res.redirect('/')
                } else {
                    res.render('login', { errorMessage: 'Information is incorrect' })
                }
            })
        })
})

//SELECT movie_title,movie_description,movie_genre,is_rated_r,date_created FROM movies WHERE movie_id = 6'
app.get('/', (req, res) => {
    db.one('SELECT movie_title,movie_description,movie_genre,is_rated_r,date_created FROM movies WHERE movie_id = 6')
        .then(movies => {
            console.log(movies)
            res.render('index', { movies: movies })
        })
})

//SELECT * FROM movies
app.get('/', (req, res) => {
    db.any('SELECT * FROM movies')
        .then(movies => {
            console.log(movies)
            res.render('index', { movies: movies })
        })
})

//ADDING A MOVIE
//INSERT INTO movies(movie_title,movie_description,movie_genre,is_rated_r) VALUES('it','not funny','horror',TRUE);
app.post('/addmymovie', (req, res) => {
    const movie_title = req.body.movie_title
    const movie_description = req.body.movie_description
    const movie_genre = req.body.movie_genre

    db.none('INSERT INTO movies(movie_title,movie_description,movie_genre) VALUES($1,$2,$3)', [movie_title, movie_description, movie_genre])
        .then(() => {
            res.redirect('/')
        })
})

//FETCH CUSTOMER BY ID
//SELECT movie_title,movie_description,movie_genre,is_rated_r,date_created FROM movies WHERE movie_id = 6
app.get('/movies/:moviesId', (req, res) => {

    const movie_id = parseInt(req.params.movie_id)
    db.none('SELECT movie_title,movie_description,movie_genre,is_rated_r,date_created FROM movies WHERE movie_id = $1', [movie_id])
        .then(result => {
            res.render('index', { movies: movies })
        })



})

app.listen(3000, () => {
    console.log('Server is running...')
})