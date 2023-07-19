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
    <div className="hero body animate-slide-in-down">
      <div className=''>
      <h1 className='text p-12'>  My name is Lucas Matias Santos and I am a Full Stack MERN Developer &amp; Mobile apps, I develop my applications with these technologies | HTML5 | CSS3 | Javascript | Tailwind | React | ReactNative | Express | MongoDB | SQL | NodeJS | Redux | Redux Toolkit | Github</h1>
      </div>
     
      <div className="triangle-container ">
      <div id="glow" />
      </div>

    </div>
  );
};

export default TriangleGrid;
