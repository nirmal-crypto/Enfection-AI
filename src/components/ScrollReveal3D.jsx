import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ScrollReveal3D = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <RevealSection ref={sectionRef}>
      {children}
    </RevealSection>
  );
};

const RevealSection = styled.div`
  opacity: 0;
  transform: rotateX(20deg) translateY(100px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  &.reveal {
    opacity: 1;
    transform: rotateX(0deg) translateY(0);
  }
`;

export default ScrollReveal3D;