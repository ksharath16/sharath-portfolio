import React from 'react';
import Reveal from './Reveal.jsx';

const PROJECTS = [
  {
    title: 'pfSense Firewall Lab',
    status: 'completed',
    desc: 'Built a full firewall lab from scratch in VirtualBox — configured WAN/LAN interfaces, DHCP, an attacker VM (Kali) and a victim VM (Ubuntu), and troubleshot real-world issues like NAT port forwarding and admin lockouts.',
    tags: ['pfSense', 'VirtualBox', 'Kali Linux', 'Networking']
  },
  {
    title: 'Phishing URL & Email Detector',
    status: 'completed',
    desc: 'A Flask web app using a Random Forest model to classify phishing URLs and emails, achieving ~97% accuracy on labeled data. Built end-to-end, from data prep to a working local web interface.',
    tags: ['Python', 'Flask', 'Machine Learning']
  },
  {
    title: 'Enterprise Phishing Awareness Program',
    status: 'deployed',
    desc: 'Designed and launched a phishing awareness training program for a behavioral health organization — built the quiz, manager proposal, and rollout communications using Microsoft Forms and SharePoint.',
    tags: ['Microsoft 365', 'SharePoint', 'Security Awareness']
  },
  {
    title: 'Ubuntu Server Security Lab',
    status: 'ongoing',
    desc: 'Set up a dedicated Ubuntu Server lab using UTM with static IP networking, then ran nmap scans and vulnerability assessments against local network targets to practice offensive/defensive fundamentals.',
    tags: ['Ubuntu Server', 'UTM', 'nmap']
  },
  {
    title: 'This Portfolio (Full-Stack)',
    status: 'ongoing',
    desc: 'React frontend + Node/Express backend with a working contact form API, deployed to production with a custom domain — built to practice full-stack deployment and DevOps fundamentals.',
    tags: ['React', 'Node.js', 'Express', 'Deployment']
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="cmd-label">ls -la projects/</div>
        <h2 className="section-title">Projects</h2>
        {PROJECTS.map((p) => (
          <Reveal className="project" key={p.title}>
            <div className="project-head">
              <h3>{p.title}</h3>
              <span className="project-status">{p.status}</span>
            </div>
            <p className="desc">{p.desc}</p>
            <div className="tag-row">
              {p.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
