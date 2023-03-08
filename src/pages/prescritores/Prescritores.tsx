import React, { useEffect } from 'react';
import {Container, Content, Wrapper, MainSection} from './styles';
import Nav from '../components/Navbar/Navbar';
import {Filter} from '../components/Filter/Filter';
import {MedicCard} from '../components/MedicCard/MedicCard';
import {CarouselMedics} from '../components/CarouselMedics';
import {Footer} from '../home/styles';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Prescritores(): JSX.Element {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <Container>
      <Nav/>
      <MainSection >
        <Content>
          <Wrapper>
            <div className={'text-container'}>
              <div className={'text-wrapper'} data-aos="fade-up">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
              </div>
            </div>
          </Wrapper>
          <div className={'global-wrapper'}>

            <div className={'card-wrapper'} data-aos="fade-up">
              <CarouselMedics/>
            </div>
          </div>
        </Content>
      </MainSection>
      <Footer />
    </Container>
  );
}

export {Prescritores};
