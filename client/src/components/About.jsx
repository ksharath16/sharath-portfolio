import React from 'react';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="cmd-label">whoami</div>
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I'm a <strong>Network & Systems Administrator</strong> with hands-on experience
              managing enterprise IT environments — from Active Directory and Microsoft 365 to
              firewalls and endpoint management. I hold a <strong>Master's degree in Computer
              Science</strong> and have spent the last few years working across day-to-day
              administration, security hardening, and infrastructure projects.
            </p>
            <p>
              Alongside my admin work, I co-founded <strong>DelBric Systems</strong>, where I help
              build and manage cloud infrastructure and SaaS solutions for small businesses. I'm
              also deep in hands-on cybersecurity labs and cloud certifications, working toward a
              long-term goal of moving into <strong>security engineering</strong>.
            </p>
            <p>
              I like systems that are documented, monitored, and boring in the best way —
              infrastructure that just works.
            </p>
          </Reveal>
          <Reveal className="fact-panel">
            <div className="fact-row"><span className="k">role</span><span className="v">Network & Systems Admin</span></div>
            <div className="fact-row"><span className="k">focus</span><span className="v">Infra, Identity, Security</span></div>
            <div className="fact-row"><span className="k">education</span><span className="v">M.S. Computer Science</span></div>
            <div className="fact-row"><span className="k">based_in</span><span className="v">South Florida, US</span></div>
            <div className="fact-row"><span className="k">goal</span><span className="v">Security Engineering @ scale</span></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
