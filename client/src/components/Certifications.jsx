import React from 'react';

// status: "done" | "progress" — update as certs are earned
const CERTS = [
  { name: 'AZ-900 — Azure Fundamentals', status: 'done' },
  { name: 'AWS Certified Cloud Practitioner', status: 'done' },
  { name: 'CompTIA Network+', status: 'progress' },
  { name: 'M.S. Computer Science', status: 'done' }
];

export default function Certifications() {
  return (
    <section id="certs">
      <div className="wrap">
        <div className="cmd-label">status --certifications</div>
        <h2 className="section-title">Certifications & learning</h2>
        <div className="cert-row">
          {CERTS.map((c) => (
            <div className="cert-chip" key={c.name}>
              <span className={`status-dot ${c.status === 'done' ? 'done' : ''}`}></span>
              {c.name} — {c.status === 'done' ? 'completed' : 'in progress'}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
