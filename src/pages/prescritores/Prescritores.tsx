import React from 'react';
import {Container, Content, Wrapper} from './styles';
import Nav from '../components/Navbar/Navbar';
import {Filter} from '../components/Filter/Filter';
import {MedicCard} from '../components/MedicCard/MedicCard';

function Prescritores(): JSX.Element {
  return (
    <Container>
      <Nav/>
      <Wrapper>
        <div className={'text-container'}>
          <div className={'text-wrapper'}>
            <p>Aqui você vai escolher o médico especialista para sua patologia e disponibilidade para agendarmos sua
              consulta</p>
          </div>
        </div>
      </Wrapper>
      <Content>
        <div className={'wrapper'}>
          <div className={'filter-n-card-wrapper'}>

            <Filter/>
            <div className={'card-wrapper'}>
              <MedicCard/>
              <MedicCard/>
              <MedicCard/>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export {Prescritores};
