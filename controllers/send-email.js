import express from "express";
import nodemailer from 'nodemailer'

const router = express.Router();

router.post('/', async (req, res) => {
    const { to, content } = req.body;

    // Create a transporter with the SMTP configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kbdevika@gmail.com',
            pass: 'devu@2002'
        }
    });

    // Define email options
    const mailOptions = {
        from: 'kbdevika@gmail.com',
        to: "sandeep.evoura@gmail.com",
        subject: 'Subject of your email',
        text: "You have a new job recommendation. See your portal to view more."
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

export default router;