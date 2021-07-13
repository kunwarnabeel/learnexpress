//body-parser
//This is used to parse the body of requests which have payloads attached to them.
// To mount body parser, we need to install it using npm install --save body-parser 
// and to mount it, include the following lines in your index.js −


// cookie-parser
// It parses Cookie header and populate req.cookies with an object keyed by cookie names. 
// To mount cookie parser, we need to install it using npm install --save cookie-parser 
// and to mount it, include the following lines in your index.js −

const express = require('Express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// app.use('/middleware' , (req , res , next) => {
//     console.log("Start");
//     next();
// });

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

// to parse cookies
app.use(cookieParser())

app.get('/middleware' , (req , res , next) => {
    res.send("Middle");
    next();
});

// app.use('/middleware' , (req , res) => {
//     console.log('End');
//     next();
// });

app.listen(1001);