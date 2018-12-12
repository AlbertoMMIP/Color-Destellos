const mailer = require('nodemailer');
const transport = mailer.createTransport({
  service: "SendGrid",
  auth:{
    user:process.env.SEND_USER,
    pass:process.env.SEND_PASS
  }
});

transport.verify(function(error, success){
  if(error) console.log(error);
  else console.log('Server is ready to take our messages');
});

exports.send = (options) => {
  const mailOptions =  {
    subject: options.subject,
    from: `<noreplay@colorydestellos.com>`,
    to: options.email,
    text: `Confirma tu usuario`,
    html: options.html
  };

  return transport.sendMail(mailOptions);

}