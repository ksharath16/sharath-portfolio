import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Basic server-side validation — never trust the client alone
function validate({ name, email, message }) {
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return 'Please provide your name.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return 'Please provide a valid email.';
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return 'Message should be at least 10 characters.';
  }
  return null;
}

router.post('/', async (req, res) => {
  const error = validate(req.body || {});
  if (error) {
    return res.status(400).json({ error });
  }

  const { name, email, message } = req.body;

  // If SMTP isn't configured yet, log instead of failing —
  // lets you test the form locally before setting up real email sending.
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.log('[contact] SMTP not configured. Submission received:', { name, email, message });
    return res.status(200).json({ ok: true, note: 'Logged locally (SMTP not configured yet).' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] Failed to send email:', err.message);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

export default router;
