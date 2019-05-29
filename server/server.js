const bodyParser = require('body-parser');
const express = require('express');
const mailController = require('./controllers/mailController');

const app = express();

app.use(bodyParser.json());
app.use('/', mailController);

app.get('/send', function (req, res) {
  res.send('Hello World')
})

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
