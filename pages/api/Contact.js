import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        // Update your SendGrid API key here
        api_key:'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'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
     console.log(req.body)

    const {name, email, text} = req.body;

    const data = {
        // Update your email here
        to: 'contact@tonomy.foundation',
        from: email,
        subject: 'Contact form',
        text: text,
        html: `
            <b>From:</b> ${name} <br />
            <b>Subject:</b> ${subject} <br />
            <b>Message:</b> ${text}
        `
    };
    try {
        const response = await mailer.sendMail(data);
        console.log(response)
        res.status(200).send("Email send successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}