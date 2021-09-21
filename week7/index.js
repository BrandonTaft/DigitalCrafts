const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const app = express()

app.use(express.urlencoded())



app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')







app.get('/', (req,res) => {
    let fullName = 'John Doe'
    res.render('index', { name: fullName, age: 45 })
})

app.listen(3000, () => {
    console.log('Server is running...')
})
