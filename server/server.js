const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mailController = require('./controllers/mailController');

const app = express();

app.use(bodyParser.json());
app.options('/api/send', cors());
app.use('/', mailController);

app.get('/api/send', function (req, res) {
  res.send('Hello World')
})

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
