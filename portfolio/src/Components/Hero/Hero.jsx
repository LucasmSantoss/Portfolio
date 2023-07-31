import React, { useEffect } from 'react';
import './hero.css';

import Typed from 'typed.js';

const TriangleGrid = () => {
  

  useEffect(() => {
    // TYPING EFFECT
    const options = {
      strings: [
        'My name is Lucas Matias Santos and I am a Full Stack MERN Developer & Mobile apps,',
        'I develop my applications with these technologies',
        ' | HTML5 | CSS3 | Javascript | Tailwind |',
        'React | ReactNative | Express | MongoDB | SQL | NodeJS | ',
        ' Redux | Redux Toolkit | Github',
      ],
      typeSpeed: 3,
      backSpeed: 12,
      startDelay: 1000,
      backDelay: 1200,
      loop: true,
      contentType: 'html',
    };

    const typed = new Typed('#typed', options);

    return () => {
      typed.destroy(); // Cleanup on unmount to prevent memory leaks
    };
  }, []);



  return (
    <div className="hero body animate-slide-in-down">
       <div className="vert-text">
        <div className="p-img">
                
        </div>
        <h1 id="typer-size">
          {/* TEXTS */}
          <span id="typed"></span>
          <div id="typed-strings">
          </div>
          {/* TEXTS ENDS */}
        </h1>
        {/* TITLE */}
      </div>
      <div id="glow" />
      </div>

    
  );
};

export default TriangleGrid;
