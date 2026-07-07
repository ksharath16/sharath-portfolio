import React from 'react';
import Reveal from './Reveal.jsx';

const SKILL_GROUPS = [
  {
    title: '// Networking & Firewalls',
    tags: ['pfSense', 'VLANs', 'Subnetting', 'NAT / Port Forwarding', 'OSPF', 'BGP concepts']
  },
  {
    title: '// Systems Administration',
    tags: ['Active Directory', 'Group Policy', 'Windows Server', 'Print Management']
  },
  {
    title: '// Cloud & Identity',
    tags: ['Microsoft Intune', 'Entra ID', 'Exchange Online', 'Microsoft 365', 'AWS']
  },
  {
    title: '// Security & Labs',
    tags: ['Kali Linux', 'nmap', 'Phishing Simulation', 'Vulnerability Labs']
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="cmd-label">cat skills.conf</div>
        <h2 className="section-title">Technical expertise</h2>
        <div className="skill-grid">
          {SKILL_GROUPS.map((group) => (
            <Reveal className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
