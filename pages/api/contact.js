const sgMail = require('@sendgrid/mail');

export default function handle(req, res) {
  sgMail.setApiKey('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');

  const { name, email, phone, message } = req.body;

  return sgMail
    .send({
      to: 'aelisa.valmori@gmail.com',
      from: {
        name: 'Anna-Elisa-Valmori.com',
        email: 'ae@anna-elisa-valmori.com'
      },
      replyTo: email,
      subject: 'Message du site web',
      text:
        message.replace(/\n/, '\n\n') +
        '\n\n___________________\n\nNom : ' +
        name +
        '\n\nEmail : ' +
        email +
        '\n\nTéléphone : ' +
        phone
    })
    .then(() => {
      res.status = 200;
      res.json({ success: true });
    })
    .catch(error => {
      console.error(error.toString());
      res.status = 500;
      res.json({ success: false, error: error.toString() });
    });
}
