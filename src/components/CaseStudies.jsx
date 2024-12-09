import styled from 'styled-components';
import cardBg from '../assets/cardbg.png';
import enfWhiteLogo from '../assets/enfwhite2.png';
import hemasLogo from '../assets/hemas.png';
import laptopImage from '../assets/lap.png';
import maggiLogo from '../assets/maggi.png';
import mash3Image from '../assets/mash3.png';
import noodleImage from '../assets/noodle.png';
import TCI from '../assets/TCI.png';
import tcu2 from '../assets/tcu2.png';
import ScrollReveal3D from './ScrollReveal3D';

const CaseStudies = () => {
  return (
    <ScrollReveal3D>
      <CaseStudiesSection>
        <Title>Case Studies</Title>
        <CarouselContainer>
          <Card>
            <CardContent>
              <TopSection>
                <Logo src={enfWhiteLogo} alt="Enfection Logo" />
                <CardTitle style={{ marginTop: '30px' }}>
                  Infinite<br />Possibilities
                </CardTitle>
              </TopSection>
              <MashImageWrapper>
                <MashImage src={mash3Image} alt="Mash Display" />
              </MashImageWrapper>
            </CardContent>
            <div className="hover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </Card>
          
          <Card>
            <CardContent>
              <TopSection>
                <Logo src={maggiLogo} alt="Maggi Logo" />
                <CardTitle>
                  Cook<br />different
                </CardTitle>
              </TopSection>
              <NoodleImageWrapper>
                <NoodleImage src={noodleImage} alt="Noodle Dish" />
              </NoodleImageWrapper>
            </CardContent>
            <div className="hover-content">
              Maggi is a brand that resonates with multiple generations, evoking cherished memories tied to significant life milestones and moments shared with family and friends. Leveraging Generative AI, we brought these memories to life through a unique, one-of-a-kind user-generated content campaign.
            </div>
          </Card>
          
          <Card>
            <CardContent>
              <TopSection>
                <Logo src={hemasLogo} alt="Hemas Logo" />
                <CardTitle style={{ marginTop: '19px' }}>
                  Beauty of<br />Life
                </CardTitle>
              </TopSection>
              <LaptopImageWrapper>
                <LaptopImage src={laptopImage} alt="Laptop Display" />
              </LaptopImageWrapper>
            </CardContent>
            <div className="hover-content">
              Gold hair launched their hair style checker with the help of AI. Users can use their face picture and check how they will look with various styles for a fun and engaing activity powered by AI 


            </div>
          </Card>
          
          <Card>
            <CardContent>
              <TopSection>
                <Logo src={TCI} alt="TCI Logo" />
                <CardTitle style={{ marginTop: '10px' }}>
                  Cleanse<br />the Nature
                </CardTitle>
              </TopSection>
              <TCUImageWrapper>
                <TCUImage src={tcu2} alt="TCU Display" />
              </TCUImageWrapper>
            </CardContent>
            <div className="hover-content">
              We converted the world's largest plastic circulatory funding database into an intelligent knowledge agent that provides precise and customized insights powered by Natural Language Processing. 
            </div>
          </Card>
        </CarouselContainer>
      </CaseStudiesSection>
    </ScrollReveal3D>
  );
};

const CaseStudiesSection = styled.section`
  padding: 80px 20px;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  color: white;
  text-align: center;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1400px) {
    padding: 0 20px;
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    gap: 40px;
  }
`;

const Card = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 2px;
  background: linear-gradient(135deg, #872D00, #820086);
  
  @media (max-width: 1400px) {
    width: 350px;
    height: 525px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: 500px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #000 url(${cardBg}) no-repeat center center;
    background-size: cover;
    border-radius: 22px;
    z-index: 1;
  }

  .hover-content {
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #FF9C33;
    border-radius: 22px;
    z-index: 5;
    transform: translateX(-101%);
    transition: transform 0.5s ease;
    padding: 40px;
    color: black;
    font-size: 18px;
    line-height: 1.6;
  }

  &:hover .hover-content {
    transform: translateX(0);
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopSection = styled.div`
  padding: 40px 40px 0 40px;
  height: 160px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 30px 30px 0 30px;
    height: 140px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    width: 80px;
    margin-bottom: 20px;
  }
`;

const CardTitle = styled.h3`
  font-size: 36px;
  color: white;
  font-weight: bold;
  line-height: 1.1;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const NoodleImageWrapper = styled.div`
  align-self: flex-end;
  width: 75%;
  margin-top: auto;
  
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const NoodleImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const LaptopImageWrapper = styled(NoodleImageWrapper)`
  width: 85%;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 30px;
  }
`;

const LaptopImage = styled(NoodleImage)`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 0;
`;

const TCUImageWrapper = styled(NoodleImageWrapper)`
  width: 95%;
  margin-bottom: 40px;
  margin-right: -20px;
  
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 30px;
    margin-right: -15px;
  }
`;

const TCUImage = styled(NoodleImage)`
  width: 110%;
  height: auto;
  object-fit: contain;
  margin-bottom: 0;
  transform: scale(1.1) translateX(10px);
`;

const MashImageWrapper = styled(NoodleImageWrapper)`
  width: 70%;
  margin-bottom: px;
  margin-right: -30px;
  margin-top: 40px;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    width: 65%;
    margin-bottom: 30px;
    margin-right: 15px;
    margin-top: 30px;
    padding-right: 15px;
  }
`;

const MashImage = styled(NoodleImage)`
  width: 80%;
  height: auto;
  object-fit: contain;
  margin-bottom: 0;
  padding-right: 10px;
`;

export default CaseStudies;