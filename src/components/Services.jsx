import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import digitalTwinVideo from '../assets/digital_twin.mp4';
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';

const services = [
  {
    title: 'Digital Twins',
    description: 'Digital Human Avatars: Your Infinite Digital Self Unleash the power of hyper-realistic AI personas that transcend traditional boundaries',
    media: digitalTwinVideo
  },
  {
    title: 'Knowledge bots',
    description: 'Revolutionize Stakeholder Interaction: Our bespoke AI chatbots are intelligent digital ambassadors designed to understand, engage, and solve. Powered by advanced natural language processing, they revolutionalize how your customers, employees, and other stakeholders interact with your organization.  '
  },
  {
    title: 'Personalized Videos',
    description: 'We are leveraging AI to create highly personalized video experiences from face-swapping technology that allows users to see themselves as movie heroes to custom video callouts from influencers tailored to individual audiences, AI makes content deeply interactive and unique. '
  },
  {
    title: 'Content Creation at Scale',
    description: 'Augmented Reality, Amplified Potential: Unleash Infinite Creative Potential: Our AI powered content engine creates high-quality, targeted content across multiple channels in no time. Say goodbye to creative bottlenecks and hello to consistent, engaging content that resonate with your audience'
  },
  {
    title: 'AR & VR Innovations',
    description: 'We craft immersive AR experiences that blur the lines between digital and physical worlds. From interactive product demonstrations to complex training simulations, our AR solutions transform how your business communicates and connects with audience'
  }
];

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 2;
    transform: scale(1);
  }
`;

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    designation: '',
    email: '',
    contactNumber: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleInputChange = (e) => {
    const fieldMap = {
      user_name: 'name',
      company_name: 'companyName',
      designation: 'designation',
      user_email: 'email',
      contact_number: 'contactNumber'
    };

    setFormData({
      ...formData,
      [fieldMap[e.target.name]]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_6tm23wj',
        'template_b1a12bj',
        form.current,
        {
          publicKey: 'tyHe_0Z8c1vn_0pgk',
        }
      )
      .then(
        () => {
          setShowModal(false);
          setShowThankYou(true);
          setTimeout(() => setShowThankYou(false), 3000);
          setFormData({
            name: '',
            companyName: '',
            designation: '',
            email: '',
            contactNumber: ''
          });
        },
        (error) => {
          console.error('FAILED....', error.text);
          alert('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ScrollReveal>
      <ServicesSection>
        <Title>Our Services</Title>
        <TabContainer>
          <TabList>
            {services.map((service, index) => (
              <TabItem
                key={index}
                active={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                <span>{service.title}</span>
              </TabItem>
            ))}
          </TabList>
        </TabContainer>

        <ContentCard>
          <ContentLeft>
            <ContentTitle>{services[activeTab].title}</ContentTitle>
            <Description>{services[activeTab].description}</Description>
            <AccessButton onClick={() => setShowModal(true)}>Access</AccessButton>
          </ContentLeft>
          {activeTab === 0 && (
            <VideoContainer>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={digitalTwinVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoContainer>
          )}
        </ContentCard>
      </ServicesSection>

      {showModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
            <h2>Request Access</h2>
            <Form ref={form} onSubmit={handleSubmit}>
              <Input
                type="text"
                name="user_name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="company_name"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                type="tel"
                name="contact_number"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </SubmitButton>
            </Form>
          </ModalContent>
        </Modal>
      )}

      {showThankYou && (
        <ThankYouMessage>
          Thank you! One of our AI experts will reach out to you soon!
        </ThankYouMessage>
      )}
    </ScrollReveal>
  );
};

const ServicesSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

const TabContainer = styled.div`
  margin-bottom: 40px;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-bottom: 24px;
  }
`;

const TabList = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 48px;
  margin: 0 auto;
  max-width: 100%;
  padding: 8px;
  border-radius: 16px;
  background: linear-gradient(90deg, #872D00, #820086);
  justify-content: space-between;
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #000;
    border-radius: 14px;
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    padding: 8px;
  }
`;

const TabItem = styled.button`
  all: unset;
  color: white;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-align: center;
  border-radius: 12px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }
  
  &:focus {
    outline: none;
  }
  
  &:focus-visible {
    outline: none;
  }
  
  ${props => props.active && `
    background: linear-gradient(90deg, #471384, #4A0000);
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
                 0 0 20px rgba(255, 255, 255, 0.5),
                 0 0 30px rgba(255, 255, 255, 0.3);
  `}

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    text-shadow: ${props => !props.active && '0 0 10px rgba(255, 255, 255, 0.3)'};
  }
`;

const ContentCard = styled.div`
  background: rgb(13, 12, 34);
  border-radius: 24px;
  padding: 40px;
  margin-top: 20px;
  display: flex;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }
`;

const ContentLeft = styled.div`
  flex: 1;
`;

const VideoContainer = styled.div`
  flex: 1;
  video {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 30px;
  max-width: 800px;
  text-align: left;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 24px;
  }
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${modalAnimation} 0.3s ease-out forwards;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: rgb(13, 12, 34);
  padding: 40px;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  position: relative;
  
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #FF4D4D;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background: linear-gradient(90deg, #FF4D4D, #F9CB28);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
`;

const ThankYouMessage = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #FF4D4D, #F9CB28);
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  z-index: 1000;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translate(-50%, 100%);
    }
    to {
      transform: translate(-50%, 0);
    }
  }
`;

export default Services;