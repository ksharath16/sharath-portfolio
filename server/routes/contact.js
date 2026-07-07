import express from 'express';
import { Resend } from 'resend';

const router = express.Router();

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

  if (!process.env.RESEND_API_KEY) {
    console.log('[contact] RESEND_API_KEY not configured. Submission received:', { name, email, message });
    return res.status(200).json({ ok: true, note: 'Logged locally (Resend not configured yet).' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error: resendError } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    if (resendError) {
      throw new Error(resendError.message || 'Resend API error');
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] Failed to send email:', err.message);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

export default router;