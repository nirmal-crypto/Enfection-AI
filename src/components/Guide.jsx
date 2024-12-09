import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Guide = () => {
  const cards = [
    { 
      title: "INFRASTRUCTURE\nLAYER", 
      gradient: "linear-gradient(135deg, #FF0000, #B200FF)"
    },
    { 
      title: "PEOPLE\nLAYER", 
      gradient: "linear-gradient(135deg, #FF0707, #03CC2F)"
    },
    { 
      title: "APPLICATION\nLAYER", 
      gradient: "linear-gradient(135deg, #FF0000, #011E86)"
    }
  ];

  return (
    <ScrollReveal>
      <GuideSection>
        <ContentContainer>
          <TextContent>
            <Title>
              A One of kind
              <GradientText>AI Guide</GradientText>
              at Your Finger Tips
            </Title>
            <AccessButton>Access</AccessButton>
          </TextContent>
          <CardsContainer>
            <CardsVisual
              initial="initial"
              whileHover="hover"
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  as={motion.div}
                  gradient={card.gradient}
                  variants={{
                    initial: {
                      scale: 1,
                      y: index * 20,
                      x: 0,
                      rotate: index * 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      },
                      boxShadow: `${index * 4}px ${index * 4}px ${index * 8}px rgba(0, 0, 0, 0.3)`
                    },
                    hover: {
                      scale: 1,
                      y: 0,
                      x: (index - 1) * 220,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      },
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                    }
                  }}
                >
                  <CardTitle>{card.title}</CardTitle>
                </Card>
              ))}
            </CardsVisual>
          </CardsContainer>
        </ContentContainer>
      </GuideSection>
    </ScrollReveal>
  );
};

const GuideSection = styled.section`
  padding: 100px 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 30px;
`;

const GradientText = styled.span`
  display: block;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AccessButton = styled.button`
  position: relative;
  padding: 12px 32px;
  background: transparent;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 100px;
    padding: 2px;
    background: linear-gradient(90deg, #FF4D4D, #F9CB28);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover {
    transform: translateY(-1px);
  }
`;

const CardsContainer = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const CardsVisual = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 300px;
  transform-style: preserve-3d;
`;

const Card = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 300px;
  background: ${props => props.gradient};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
  border: 2px solid white;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    0 8px 16px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  backface-visibility: hidden;
  transform-origin: center center;
  backdrop-filter: blur(5px);

  &:hover {
    box-shadow: 
      0 8px 16px rgba(0, 0, 0, 0.4),
      0 16px 32px rgba(0, 0, 0, 0.3),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  }
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  white-space: pre-line;
  opacity: 0.65;
  margin-bottom: 20px;
  line-height: 1.4;
`;

export default Guide;