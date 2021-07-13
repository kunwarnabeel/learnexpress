const express = require('Express');
const app = express();

const routing = require('./routing');

app.use('/routing/' , routing);

app.listen(1001);


