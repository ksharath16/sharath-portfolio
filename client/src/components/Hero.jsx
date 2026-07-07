import React, { useEffect, useRef, useState } from 'react';

const LINES = [
  '> whoami',
  'sharath kotha — network & systems administrator',
  '> uptime',
  '3 years in production. zero downtime on my watch.'
];

export default function Hero() {
  const [display, setDisplay] = useState('');
  const [photoError, setPhotoError] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    let li = 0, ci = 0, timeoutId;

    function typeLine() {
      if (!mounted.current || li >= LINES.length) return;
      const current = LINES[li];
      if (ci <= current.length) {
        setDisplay(current.slice(0, ci));
        ci++;
        timeoutId = setTimeout(typeLine, 28);
      } else {
        li++;
        ci = 0;
        if (li < LINES.length) {
          timeoutId = setTimeout(() => {
            setDisplay('');
            typeLine();
          }, 600);
        }
      }
    }
    typeLine();
    return () => {
      mounted.current = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header className="hero wrap" id="hero">
      <div className="prompt-line">
        <span className="dot"></span> session established — access level: public
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div id="terminal">
            {display}
            <span className="cursor"></span>
          </div>
          <h1 className="title">
            Keeping infrastructure <span className="accent">online, secure,</span> and under control.
          </h1>
          <p className="subtitle">
            I'm Sharath Kotha — a Network & Systems Administrator working across firewalls, Active
            Directory, Microsoft Intune, Exchange, AWS, and cloud infrastructure. I build things
            that don't go down at 2am.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>

        <div className="hero-photo">
          {!photoError ? (
            <img
              src="/profile.jpg"
              alt="Sharath — Network & Systems Administrator"
              onError={() => setPhotoError(true)}
            />
          ) : (
            <div className="placeholder">
              drop your photo at<br />
              client/public/profile.jpg
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
