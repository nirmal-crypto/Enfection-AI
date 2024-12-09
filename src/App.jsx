import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Guide from './components/Guide';
import Footer from './components/Footer';
import GlobalStyles from './Styles/GlobalStyles';
import styled from 'styled-components';
import ScrollReveal3D from './components/ScrollReveal3D';

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <DotGrid />
      <main>
        <Hero />
        <ScrollReveal3D>
          <Services />
        </ScrollReveal3D>
        <ScrollReveal3D>
          <CaseStudies />
        </ScrollReveal3D>
        <ScrollReveal3D>
          <Guide />
        </ScrollReveal3D>
      </main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const DotGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  z-index: 0;
`;

export default App;