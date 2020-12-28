const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Country = require('./models/Country')
const methodOverride = require('method-override')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");

require('dotenv/config')
require('./config/passport')(passport)

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended : false}))
app.set('view engine','ejs')
app.use(methodOverride('_method'))
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })
    
//Routes
app.get('/', async (req,res) => {
    const countries = await Country.find();
    res.render('countries/index',{countries : countries})
})
//Import routes

const countriesRoute = require('./routes/countries')

const allRoute = require('./routes/All')

app.use('/countries',countriesRoute)

app.use('/all',allRoute)

app.use('/users',require('./routes/users'));
//Connect to db
mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
const db = mongoose.connection
db.on('error',(error) => {console.log(error)})
db.once('open' , () => {console.log('Connected to server')})


app.listen(3000 , () => {
    console.log("Server started")
})