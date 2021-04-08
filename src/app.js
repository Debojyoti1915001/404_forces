//Importing packages
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//Configuring App
const app = express();
app.use(express.json());

// using dotenv module for environment
require("dotenv").config();

//Configuring Port
const PORT = process.env.PORT || 3000;

//Mongoose connection
mongoose.connect(process.env.MONGODB_URL,{
	useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>console.log('Connected to mongo server'))
	.catch(err => console.error(err));

//Setting EJS view engine
app.set('view engine','ejs');

//body parser
app.use(express.urlencoded({extended:true}));

//Setup for rendering static pages
const publicDirectory = path.join(__dirname,'../public');
app.use(express.static(publicDirectory));

//Routes

//Start the server
app.listen(PORT,()=>{
	console.log('Server listening on port',PORT);
})