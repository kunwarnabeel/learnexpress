const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('images'));

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/static' , (req, res)=>{
   res.render('static');
})


// Virtual Path Prefix
// We can also provide a path prefix for serving static files. For example,
//  if you want to provide a path prefix like '/static', you need to include 
//  the following code in your index.js file −

app.use('/static', express.static('public'));

app.listen(1003);