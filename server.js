require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const { connect } = require('http2');
const { mongo } = require('mongoose');
const MongoConnect = require('connect-mongo');
const path = require('path');
const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');
// const recipeRouter = require('./routes/recipe.js')

// require('./configs/database');

const authController = require('./controllers/auth.js');

// const port = process.env.PORT ? process.env.PORT : '3001';

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.static('public')) //Tells Express to serve static files from the public/ folder.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoConnect.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    // cookie: { secure: process.env.NODE_ENV === 'Production', httpOnly: true}
    cookie: { secure: false, httpOnly: true }  // Set secure to false for local
}))


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
//********************
//    ROUTES
//******************** 
// middleware to check if the user isSignedin
app.use(passUserToView);
// Seed Route
app.use('/', require('./routes/seed.js'));

// Auth Route
app.use('/auth', require('./routes/auth.js'));

// Home Route
app.use('/', require('./routes/home.js'));

// is signedIn
app.use(isSignedIn);

//recipe route
app.use('/', require('./routes/recipe.js'));


// *****************
//    LISTENNER
// *****************


app.listen(process.env.PORT, () => {
  console.log(`🎧 Server is running on http://localhost:${process.env.PORT}!`);
});
