require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

const transport = {
    host: EMAIL_CLIENT_HOST,
    port: 587,
    auth: {
      user: USERNAME,
      pass: PASSWORD
    }
  }
  
  const transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
  
  router.post('/api/send', cors(), (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const bodyText = req.body.messageText;
    const content = `name: ${name} \n email: ${email} \n subject: ${subject} \n text body: ${bodyText} `;
  
    const mail = {
      from: name,
      to: EMAILRECIPIENT,
      subject: subject,
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
  
  module.exports = router;