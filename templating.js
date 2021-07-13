const express = require('Express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

//Pug is a templating engine for Express. Templating engines are used to remove the 
// cluttering of our server code with HTML, concatenating strings wildly to existing HTML 
// templates. Pug is a very powerful templating engine which has a variety of features 
// including filters, includes, inheritance, interpolation, etc. There is a lot of ground to 
// cover on this.

// npm install --save pug

app.get('/first_template' , (req, res) => {
    res.render('first_view');
});

app.get('/dynamic_view/:id/:name/:url/:email' , (req, res) => {
    res.render('dynamic' , {
        user:{
            id:req.params.id,
            name : req.params.name,
            url : req.params.url,
            email : req.params.email
         }
    });
});

app.get('/content' , (req, res) => {
    res.render('main');
});

app.listen(1002);


