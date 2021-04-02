require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const { MongoStore } = require('connect-mongo');
const path = require('path');
const WebSocket = require('ws');
const fileupload = require('express-fileupload');
const flash = require('connect-flash');
const bodyParser = require('body-parser')

const app = express();

//Model Db
require('./models/UserModel');
require('./models/CoinModel');
require('./models/HistoryModel');

//DB
require('./config/db');

//Session 
app.use(session({
    secret : process.env.COOKIE_SECRET,
    resave : false,
    store : MongoStore,
    saveUninitialized : false,
    cookie : {maxAge : 1000*60*60*24}
}))

//Passport Config
const passportInit = require('./config/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

//Gobal Midleware
app.use(flash())
app.use(express.static('public'))
app.use(fileupload());
app.use((req,res,next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})

//Set View Engine
app.set('views',path.join(__dirname, '/public/'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
require('./routes/auth')(app);
require('./routes/web')(app);
app.get('*', (req, res) => {console.log("404 found"); res.render('404')});


//Server
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`cannot run server`);
    }
    console.log(`Listening on port ${process.env.PORT}`)
});
