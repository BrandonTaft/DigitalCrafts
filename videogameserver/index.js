
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const games = [
    {title: 'game 1' , gameID: 'e3466'},
    {title: 'game 2' , gameID: 'e4099'},
    {title: 'game 3' , gameID: 'z1122'}
]

app.get('/api/videogames',(req,res) =>{
    res.json(games)
})


app.listen(8080, () => {
    console.log('Server Is Running....')
})