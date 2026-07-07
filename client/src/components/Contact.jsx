import React, { useState } from 'react';
import Reveal from './Reveal.jsx';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setStatus({ state: 'success', message: 'Message sent — I\'ll get back to you soon.' });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Failed to send. Try emailing directly.' });
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="cmd-label">./connect.sh</div>
        <Reveal className="contact-box">
          <h2>Let's talk infrastructure.</h2>
          <p>Open to security engineering, systems administration, and DevOps roles.</p>

          <div className="contact-links">
            <a className="btn btn-primary" href="mailto:sharathreddyk16@gmail.com">Email me</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/sharath-chandra-reddy-kotha-a42551223/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required value={form.message} onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            {status.message && (
              <div className={`form-status ${status.state === 'success' ? 'success' : status.state === 'error' ? 'error' : ''}`}>
                {status.message}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
