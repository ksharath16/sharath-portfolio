import React from 'react';

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="logo">sharath<span>@</span>infra<span>:~$</span></div>
        <div className="navlinks">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#certs">certs</a>
          <a href="#contact">contact</a>
          <a href="https://sharathkotha.hashnode.dev" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
      </div>
    </nav>
  );
}
