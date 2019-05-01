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
    text: `Gracias por agendar tu cita. Tu número de ticket es ${options.ticket} `,
    html: `<p>Gracias por agendar tu cita. Tu número de ticket es <strong> ${options.ticket} </strong></p>`
  };

  return transport.sendMail(mailOptions);

}

exports.sendNewDate = (options) => {
  const mailOptions =  {
    subject: options.subject,
    from: `<noreplay@colorydestellos.com>`,
    to: options.email,
    text: `Buen día ${options.name}. Acaban de agendar una nueva cita con Nº de tickect ${options.ticket} `,
    html: `<p>Buen día ${options.name}. Acaban de agendar una nueva cita con Nº de tickect  <strong> ${options.ticket} </strong></p>`
  };

  return transport.sendMail(mailOptions);

}