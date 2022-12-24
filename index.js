const nodemailer = require("nodemailer");

const transporte = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587, //true port 465, e false para as outras
    secure: false,
    auth: {
      user: 'SUACONTA@hotmail.com',
      pass: 'SUASENHA',  
    }

});

transporte.sendMail({
    from: 'top gun <topgun1946@hotmail.com>',
    to: 'thiagoangelos2022@gmail.com',
    subject: 'Bom dia',
    html: '<h1>Olá Mundo </h1>',
    text: 'hello world!!!',
})

.then((response) => console.log('Email Enviado Com Sucesso!'))
.catch((err) => console.log('Error', err));







