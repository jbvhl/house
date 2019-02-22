require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const session = require('express-session');
const massive = require('massive');

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;

//Controllers

const app = express();

app.use(json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

massive(CONNECTION_STRING).then(db => {
    console.log(`We got broads in HOU`);
    app.set('db', db)
});

//CRUD

app.listen(SERVER_PORT, () => console.log(`Pandas on ${SERVER_PORT}`));