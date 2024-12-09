"use client";
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Hero = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Automation', 'Conversation AI', 'Workflows', 'Predictive AI', 'Creative AI'];

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 500);

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearTimeout(revealTimer);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <HeroSection $isRevealed={isRevealed}>
      <ScrollingBackground>
        <ScrollingText className="top">
          AI MAKES EVERYTHING EASY &nbsp;&nbsp; AI MAKES EVERYTHING EASY &nbsp;&nbsp;
        </ScrollingText>
        <ScrollingText className="bottom">
          SO WHY NOT YOUR MARKETING JOURNEY &nbsp;&nbsp; SO WHY NOT YOUR MARKETING JOURNEY &nbsp;&nbsp;
        </ScrollingText>
      </ScrollingBackground>
      <CenterContent>
        <Title>
          AI solutions for
          <GradientText>Marketing Transformation</GradientText>
        </Title>
        <AnimatedWord>{words[currentWord]}</AnimatedWord>
      </CenterContent>
    </HeroSection>
  );
};

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const wordFade = keyframes`
  0%, 100% { opacity: 0; transform: translateY(10px); }
  20%, 80% { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: ${props => (props.$isRevealed ? 1 : 0)};
  transition: opacity 1s ease-out;
`;

const CenterContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const GradientText = styled.span`
  display: block;
  font-size: 84px;
  background: linear-gradient(90deg, #FF4D4D, #F9CB28, #FF4D4D);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const AnimatedWord = styled.div`
  font-size: 32px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
  min-height: 40px;
  animation: ${wordFade} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 24px;
    min-height: 30px;
  }
`;

const ScrollingBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  opacity: 0.3;
`;

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const ScrollingText = styled.div`
  white-space: nowrap;
  font-size: 250px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;
  position: absolute;
  
  &.top {
    animation: ${scrollLeft} 30s linear infinite;
    top: 20vh;
  }
  
  &.bottom {
    animation: ${scrollRight} 30s linear infinite;
    top: 60vh;
  }

  @media (max-width: 768px) {
    font-size: 120px;
  }
`;

export default Hero;