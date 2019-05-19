require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));