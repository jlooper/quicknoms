
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);


const APP_NAME = 'QuickNoms';

exports.sendMail = functions.database.ref('/Recipes')
  .onWrite(event => {
  var data = event.data;
  if (!data.changed('approved')) {
    return;
  }
  return sendEmail();
});

function sendEmail(email, displayName) {
  const mailOptions = {
    from: '"QuickNoms" <noreply@quicknoms.com>',
    to: 'jen.looper@gmail.com'
  };
  mailOptions.subject = `New QuickNom Recipe!`;
  mailOptions.text = `A new recipe was just posted to QuickNoms.com. Check it out!`;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('Alert email sent');
  });
}