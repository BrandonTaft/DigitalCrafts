const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')


app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))



app.use('/', moviesRouter)
global.movies = []
const PORT = 3000


app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('Server is running...')
})
