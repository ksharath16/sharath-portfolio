import React from 'react';
import Reveal from './Reveal.jsx';

const EXPERIENCE = [
  {
    date: '2023 — Present',
    role: 'Network & Systems Administrator',
    org: 'Ambrosia Behavioral Health',
    desc: 'Manage Active Directory, Microsoft Intune, Exchange, and M365 across the organization. Lead security initiatives including phishing awareness training, and support day-to-day infrastructure, imaging, and print environments.'
  },
  {
    date: '2023 — Present',
    role: 'Co-Founder & CFO',
    org: 'DelBric Systems',
    desc: 'Co-run a software, cloud infrastructure, and SaaS solutions company serving South Florida businesses — covering client infrastructure, cloud hosting, and technical strategy.'
  },
  {
    date: 'Earlier',
    role: 'Programmer Analyst',
    org: 'Cognizant',
    desc: 'Started career in application development and analysis, building the technical foundation that led into systems and network administration.'
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="cmd-label">history | tail</div>
        <h2 className="section-title">Experience</h2>
        {EXPERIENCE.map((e) => (
          <Reveal className="exp-item" key={e.role + e.org}>
            <div className="exp-date">{e.date}</div>
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-org">{e.org}</div>
              <div className="exp-desc">{e.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
