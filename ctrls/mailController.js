
'use strict';

var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'pen25453@gmail.com',
        pass: 'paozouuavkkjcvxv'
    },
    logger: true, // log to console
    debug: true, // include SMTP traffic in the logs
    // proxy: 'socks5://localhost:1080'
}, {
    // default message fields

    // sender info
    from: 'penouc <penouc@gmail.com>',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});

console.log('SMTP Configured');

// Message object
function getMessage(){

   var message = {
        // Comma separated list of recipients
        to: '"dear" <446725453@qq.com>',

        // Subject of the message
        subject: '谢谢注册shadowsocks，目前只有针对iPhone用户的教程', //

        // plaintext body
        text: '',

        // HTML body
        html: ``,

        // Apple Watch specific HTML body
        watchHtml: '<b>Shadowsocks</b>安装使用教程',

        // An array of attachments
        attachments: [

            // String attachment
            // {
            //     filename: '',
            //     content: 'Some notes about this e-mail',
            //     contentType: 'text/plain' // optional, would be detected from the filename
            // },

            // // Binary Buffer attachment
            // {
            //     filename: 'image.png',
            //     content: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
            //         '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
            //         'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),

            //     cid: 'note@example.com' // should be as unique as possible
            // },

            // // File Stream attachment
            // {
            //     filename: 'nyan cat ✔.gif',
            //     path: __dirname + '/assets/nyan.gif',
            //     cid: 'nyan@example.com' // should be as unique as possible
            // }
        ]
    };

    return message
}



function sendMail(toMail, config, res){
    console.log('Sending Mail');
    var message = getMessage();
    message.to    = '"dear"<' + toMail + '>';
    message.html   =  message.html .replace('#config#', config);
    transporter.sendMail(message, function (error, info) {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            res.send('注册失败！');
            return;
        }
        res.send(toMail + '这册成功, 请检查邮箱');
        console.log('Message sent successfully!');
        console.log('Server responded with "%s"', info.response);
    });
}

module.exports = {
    sendMail: sendMail
}