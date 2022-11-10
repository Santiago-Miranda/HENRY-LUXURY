import nodemailer from "nodemailer";

const user = 'juanicarrenio@gmail.com'
//const pass = MAILERPASS;

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'juanicarrenio@gmail.com',
        pass: 'seqlzdbzdngvszmh'
    },
});


const sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Email enviado");
    transport.sendMail({
    from: user,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Your confirmation code is ${confirmationCode}</p>
        </div>`,
    }).catch(err => console.log(err));
};

export default sendConfirmationEmail;