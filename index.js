const express= require('express');
// for setting the path of views we need to require path
const path= require('path');

const port=8000;
// just before firing  up the server we require db
const db= require('./config/mongoose');
// require the SChema
// const Contact= require('./models/contact');
 
// need to fire up express naming conevntion "app" and call the express
const app=express();

app.set('view engine','ejs');
// it will lookout in the current directory for views
app.set('views', path.join(__dirname,'views'));
// middleware
// this only read our form data not the params
app.use(express.urlencoded());
// middleware for accesing static files
app.use(express.static('assets')); 

// use express router
app.use('/',require('./routes'));


// listen is listening the request respond accordingly and these function is named symentically
app.listen(port, function(err){
    if(err){
        console.log("Error in running the server",err);
        return;
    }
    console.log("Yup!my express server is running on port",port);
})