module.exports.sendSms = (options) => {
  const accountSid = process.env.TWILIO_ACOUNT;
  const authToken = process.env.TWILIO_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  let smsOptions = {
    body: `Tienes una nueva cita con número de ticket: ${options.ticket}`,
    from: process.env.TWILIO_PHONE,
    to: options.to
  };
  if(options.user === 'CLIENT'){
    smsOptions = {
      body: `Gracias por agendar en colorydestellos.com Tu número de ticket es: ${options.ticket}`,
      from: process.env.TWILIO_PHONE,
      to: options.to
    };
  }

  return client.api.messages
        .create(smsOptions)
        .then(function(data) {
          //console.log(`SMS sended: sid: ${data.sid} segments: ${data.num_segments} price: ${data.price} price unit: ${data.price_unit}`);
        }).catch(function(err) {
          console.error('Could not send the message');
          console.error(err);
        });

}