const express = require('Express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const debug = require('debug');
const upload = multer();
const app = express();

//mongoose.connect('mongodb://localhost/testmongodb',{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect('mongodb://localhost/testmongodb', { useNewUrlParser : true, 
    useUnifiedTopology: true }, function(error) {
        if (error) {
            console.log("Error!" + error);
        }else{
            console.log("Connected");
        }
    });

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var Person = mongoose.model("Person", personSchema);

app.set('view engine', 'pug');
app.set('views','./views');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json())
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

//route here 

app.get('/person' , (req, res) => {
    res.render('db');
});
//console.log("here");
app.post('/person', function(req, res){
   // console.log(req.body);
    var personInfo = req.body; //Get the parsed information
   // console.log(personInfo.name);
    
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newPerson = new Person({
          name: personInfo.name,
          age: personInfo.age,
          nationality: personInfo.nationality
       });

       debug(newPerson);

       newPerson.save(function(err, Person){
        if(err)
           res.render('show_message', {message: "Database error", type: "error"});
        else
           res.render('show_message', {
              message: "New person added", type: "success", person: personInfo});
     });
        
    }
 });

app.listen(9000); 