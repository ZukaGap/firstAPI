const sgMail = require("@sendgrid/mail");

console.log(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(
  "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"
);

const msg = {
  to: "zuka.gaprindashvili@gmail.com", //sabamchedlishvili47@gmail.com
  from: "zuka.gaprindashvili@gmail.com",
  subject: "Dear Saba",
  text: "Hello, How are you ?",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("email sent");
  })
  .catch((error) => {
    console.log(error);
  });


  systemctl restart nginx