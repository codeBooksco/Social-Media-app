import express from 'express';
import middlewaresConfig from './config/middlewares';
import { Router } from 'express';
var helper = require('sendgrid').mail;
const async = require('async');

const app = express();


middlewaresConfig(app);


const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Listening on ${PORT}`);
    }
});


const routes = new Router();
app.use('/api', routes);

function sendEmail(
    parentCallback,
    fromEmail,
    toEmails,
    subject,
    textContent,
    htmlContent
) {
    const errorEmails = [];
    const successfulEmails = [];
    const sg = require('sendgrid')('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');
    async.parallel([
        function (callback) {
            // Add to emails
            for (let i = 0; i < toEmails.length; i += 1) {
                // Add from emails
                const senderEmail = new helper.Email(fromEmail);
                // Add to email
                const toEmail = new helper.Email(toEmails[i]);
                // HTML Content
                const content = new helper.Content('text/html', htmlContent);
                const mail = new helper.Mail(senderEmail, subject, toEmail, content);
                var request = sg.emptyRequest({
                    method: 'POST',
                    path: '/v3/mail/send',
                    body: mail.toJSON()
                });
                sg.API(request, function (error, response) {
                    console.log('SendGrid');
                    if (error) {
                        console.log('Error response received');
                    }
                    // console.log(response.statusCode);
                    // console.log(response.body);
                    // console.log(response.headers);
                });
            }
            // return
            callback(null, true);
        }
    ], function (err, results) {
        console.log('Done');
    });
    parentCallback(null,
        {
            successfulEmails: successfulEmails,
            errorEmails: errorEmails,
        }
    );
}

routes.post('/meetups', async (req, res) => {
    async.parallel([
        function (callback) {
            sendEmail(
                callback,
                'SocialMediaApp@gmail.com',
                ['codebooksco.io@gmail.com'],
                'Subject Line',
                'Text Content',
                `<p style="font-size: 32px;">
            Name: ${req.body.name}<br />
            Number: ${req.body.number}<br />
            Address: ${req.body.address}<br />
            Size: ${req.body.size}<br />
            Quantity: ${req.body.quantity}<br />
          </p>`
            );
        }
    ], function (err, results) {
        res.send({
            success: true,
            message: 'Emails sent',
            successfulEmails: results[0].successfulEmails,
            errorEmails: results[0].errorEmails,
        });
    });
});


