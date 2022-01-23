const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const port =process.env.PORT || 3003;

const app = express();

app.listen(port);
console.log('server running at ', port);

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.static( __dirname + "/public"));






app.get('/', (req,res) =>{  
    res.render('home', {title:'home'})
});

app.get('/about', (req,res) =>{
    res.render('about', {title:'about'})
});


app.get('/contact', (req,res) =>{
    res.render('contact', {title:'contact'})
});


app.use((req, res) => {
    res.send('404 not fount , oops!!!');
});