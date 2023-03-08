const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlerLoop = require('./handlerLoop.json');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// set folder storage to public
app.use(express.static(__dirname + '/public'));

const page = require('./controllers/pages');
const api = require('./controllers/api');
app.use('/', page);
app.use('/api', api);

app.listen(3000,'0.0.0.0', () => {
    console.log('Server started on port 3000');
})