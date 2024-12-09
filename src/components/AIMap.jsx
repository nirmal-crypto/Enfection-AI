import { useState } from 'react';
import styled from 'styled-components';
import AImapImage from '../assets/Aimap2.png';

const AIMap = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <Section>
      <Title>AI Map</Title>
      <MapContainer
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `
            perspective(1000px)
            rotateY(${mousePosition.x * 10}deg)
            rotateX(${-mousePosition.y * 10}deg)
          `
        }}
      >
        <DarkBackground />
        <MapImage 
          src={AImapImage} 
          alt="AI Integration Map"
          style={{
            transform: `translateZ(20px)`,
            filter: `drop-shadow(0 20px 30px rgba(0, 0, 0, 0.7))`
          }}
        />
      </MapContainer>
    </Section>
  );
};

const Section = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  min-height: auto;
  position: relative;
`;

const Title = styled.h2`
  font-size: clamp(36px, 5vw, 48px);
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const MapContainer = styled.div`
  position: relative;
  max-width: 2400px;
  width: 95vw;
  margin: 0 auto;
  padding: 40px 120px;
  transition: transform 0.2s ease-out;
  will-change: transform;
  transform-style: preserve-3d;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
`;

const DarkBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(19, 18, 52, 0.8);
  border-radius: 48px;
  z-index: 1;
  transform: translateZ(-200px);
  transform-style: preserve-3d;
  pointer-events: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const MapImage = styled.img`
  position: relative;
  width: 80%;
  height: auto;
  object-fit: contain;
  transition: transform 0.2s ease-out;
  will-change: transform;
  z-index: 2;
  margin: 30px auto;
  display: block;
`;

export default AIMap;