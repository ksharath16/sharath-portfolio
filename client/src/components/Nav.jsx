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
        </div>
      </div>
    </nav>
  );
}
