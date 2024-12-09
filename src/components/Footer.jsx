import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Section>
          <div>
            <SectionTitle>Site Map</SectionTitle>
            <LinkList>
              <li><FooterLink href="https://enfection.com/">Home</FooterLink></li>
              <li><FooterLink href="https://enfection.com/the-origin/">The origin</FooterLink></li>
              <li><FooterLink href="https://enfection.com/growth_stories/">Growth Stories</FooterLink></li>
              <li><FooterLink href="https://enfection.com/our-work/">Our Work</FooterLink></li>
              <li><FooterLink href="https://enfection.com/knowledge-hub/">Knowledge Hub</FooterLink></li>
              <li><FooterLink href="https://enfection.com/enfectors/">Enfectors</FooterLink></li>
              <li><FooterLink href="https://enfection.com/contact-us/">Contact Us</FooterLink></li>
            </LinkList>
          </div>

          <div>
            <SectionTitle>Growth Stories</SectionTitle>
            <GrowthStoriesGrid>
              <div>
                <LinkList>
                  <li><FooterLink href="https://enfection.com/growth-story/mas-holdings/">MAS Holdings</FooterLink></li>
                  <li><FooterLink href="https://s3.ap-south-1.amazonaws.com/enfection.com-s3/wp-content/uploads/2021/09/petronas.jpg">Petronas</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth-story/zuellig-pharma/">Zuellig Pharma</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth-story/keells/">Keells</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth-story/honeywell/">Honeywell</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth_stories/">CDB</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth-story/millenniumit-esp/">MillenniumIT ESP</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth_stories/">IQOS</FooterLink></li>
                </LinkList>
              </div>
              <div>
                <LinkList>
                  <li><FooterLink href="https://enfection.com/growth-story/hnb/">HNB</FooterLink></li>
                  <li><FooterLink href="https://s3.ap-south-1.amazonaws.com/enfection.com-s3/wp-content/uploads/2021/09/Rocell.png">Rocell</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth-story/booking-com/">Booking.com</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth-story/resmed/">ResMed</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth-story/melbourne-polytechnic/">Melbourne Polytechnic</FooterLink></li>
                  <li><FooterLink href="https://enfection.com/growth_stories/">ACCA</FooterLink></li>
                </LinkList>
              </div>
            </GrowthStoriesGrid>
          </div>
        </Section>

        <Section>
          <SectionTitle>Knowledge Hub</SectionTitle>
          <LinkList>
            <li><FooterLink href="https://enfection.com/knowledge-hub/#enfectors_id">Enfectious</FooterLink></li>
            <li><FooterLink href="https://enfection.com/knowledge-hub/#epidemic_id">Epidemic</FooterLink></li>
            <li><FooterLink href="https://enfection.com/knowledge-hub/#viral_id">Viral</FooterLink></li>
            <li><FooterLink href="https://enfection.com/knowledge-hub/#viral_id">Transmit</FooterLink></li>
            <li><FooterLink href="https://enfection.com/knowledge-hub/#viral_id">Neural</FooterLink></li>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <ContactInfo>
            <ContactItem>📍 651 Kotte Rd, Kotte, Sri Lanka</ContactItem>
            <ContactItem>📞 +94 11 214 4917</ContactItem>
            <ContactItem>✉️ inquiries@enfection.com</ContactItem>
          </ContactInfo>
        </Section>
      </FooterContent>

      <BottomBar>
        <div>© 2024 Company Name</div>
        <div>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
        </div>
      </BottomBar>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #000;
  padding: 60px 20px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 1200px) {
    padding: 0 20px;
    gap: 30px;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 30px;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  margin-bottom: 24px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 12px;
  }
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  
  &:hover {
    color: #fff;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  
  div:last-child {
    display: flex;
    gap: 20px;
  }
`;

const GrowthStoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export default Footer; 