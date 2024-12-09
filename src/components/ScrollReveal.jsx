import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ScrollReveal = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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

  return <RevealSection ref={sectionRef}>{children}</RevealSection>;
};

const RevealSection = styled.div`
  opacity: 0;
  transform: perspective(1000px) rotateX(10deg) translateY(50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);

  &.visible {
    opacity: 1;
    transform: perspective(1000px) rotateX(0deg) translateY(0);
  }
`;

export default ScrollReveal; 