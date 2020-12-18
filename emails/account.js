const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "zuka.gaprindashvili@gmail.com",
    subject: "Thanks for joining in !!!",
    text: `Welcome, ${name}.`,
  });
};

const sendDeleteAccount = (email, name) => {
  sgMail.send({
    to: email,
    from: "zuka.gaprindashvili@gmail.com",
    subject: "Cancellation Account",
    text: `Goodbye, ${name}.`,
  });
};

module.exports = { sendWelcomeEmail, sendDeleteAccount };
