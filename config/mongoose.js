// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/backend_test_1_db');
// acquire the connection(check if its successful)
// after connected connection will give us database
const db= mongoose.connection;

// if error then print error
db.on('error', console.error.bind(console, 'error connecting to db'));


// when connection is open for database
// up and running then print the database
db.once('open',function(){
    console.log('Succesfully connected to the database');
})
