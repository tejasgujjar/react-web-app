const express = require('express')
const app = express()
const port = 3000
const session = require('express-session'); //session testing
const path = require('path');
const cookieParser = require('cookie-parser');

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
