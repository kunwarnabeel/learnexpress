const express = require('Express');
const app = express();

app.get('/urlbuldingid/:id',function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });

 app.get('/urlbuldingnameid/:name/:id',function(req, res){
    res.send(`the name is ${req.params.name} and id is ${req.params.id}`);
 });

// You can use the req.params object to access all the parameters you pass in the url.
// Note that the above 2 are different paths. They will never overlap. 
// Also if you want to execute code when you get '/things' then you need 
// to define it separately.



app.listen(1001);