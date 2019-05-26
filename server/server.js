require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mailController = require('./controllers/mailController');

const app = express();

app.use(bodyParser.json());
app.use('/', mailController);

app.get('/send', (res) => res.status(200))



// app.use( express.static( `${__dirname}/../build` ) );

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// })

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
