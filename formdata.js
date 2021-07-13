const express = require('Express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('formdata');
});

app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(1004);