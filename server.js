const express = require('express')
const app = express()
const port = 3000
const session = require('express-session'); //session testing
const path = require('path');
const cookieParser = require('cookie-parser');

// For routes
// var routes = require('./routes/index');
// var users = require('./routes/users');

//var mysqlconn = require('./routes/mysql'); //connection pool test
//require('./routes/mongodb.js').createrconnectionpool();
var mongoURL = 'mongodb://localhost:27017/';
var mongoStore = require("connect-mongo")(session);


app.get('/', (request, response) => {
  response.send('Render home page')
})

app.listen(port, (err) => {
  if (err){
    return console.log('Error in bringing up server ',err)
  }
  console.log('**********************************************')
  console.log(`server is listening on ${port}`)
  console.log('**********************************************')
})
