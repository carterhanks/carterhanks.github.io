require('dotenv').config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const apiKey = process.env.API_KEY;

const PORT = process.env.port || 5000;

app.use(express.static('./'))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + './index.html');
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'carterthatcreator@gmail.com',
            pass: apiKey
        }
    });
    console.log(apiKey);

    const mailOptions = {
        from: req.body.email,
        to: 'carterhanks@gmail.com',
        message: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email Sent: ' + info.response);
            res.send('success');
        };
    });

});


app.listen(PORT, function() {
    console.log(`Server Slappin on ${PORT}`);
});