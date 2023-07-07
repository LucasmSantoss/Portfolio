import React, { useEffect, useState } from 'react';
import './hero.css';

const TriangleGrid = () => {
  const [columns, setColumns] = useState(0);

  useEffect(() => {
    const triangleBase = 48;

    const instantiateGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 0.4;

      const calculatedColumns = Math.ceil(width / (triangleBase * 2)) + 1;
      setColumns(calculatedColumns);
    };

    window.addEventListener('resize', instantiateGrid);
    instantiateGrid();

    return () => {
      window.removeEventListener('resize', instantiateGrid);
    };
  }, []);

  return (
    <div className="hero">
      
      <h1 className='text'>   Mi nombre es Lucas Matias Santos y soy Full Stack MERN Developer &amp; Mobile apps, desarrollo mis aplicaciones con estas tecnologias | HTML5 | CSS3 | Javascript | Tailwind | React | React Native | Express | MongoDB | SQL | NodeJS | Redux | Redux Toolkit | Github</h1>
      <div className="triangle-container">
    
      </div>
      <div id="glow" />
    </div>
  );
};

export default TriangleGrid;
