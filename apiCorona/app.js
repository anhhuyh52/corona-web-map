const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
//Routes
app.get('/',(req,res) => {
    res.send('We are home');
})

//Import routes

const countriesRoute = require('./routes/countries')

const allRoute = require('./routes/All')

app.use('/countries',countriesRoute)

app.use('/all',allRoute)

//Connect to db
mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser: true})
const db = mongoose.connection
db.on('error',(error) => {console.log(error)})
db.once('open' , () => {console.log('Connected to server')})


app.listen(3000 , () => {
    console.log("Server started")
})