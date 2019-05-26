require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transport = {
    host: 'smtp.outlook.com',
    auth: {
      user: 'do_not_reply_binary_llc@outlook.com',
      pass: '%345Tert'
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
  
  router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    const mail = {
      from: 'Jared Parker',
      to: 'jared.parker7890@gmail.com',
      subject: 'New Message from Contact Form',
      text: 'Content'
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