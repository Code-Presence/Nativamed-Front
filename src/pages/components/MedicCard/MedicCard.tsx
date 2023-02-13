import React from 'react';
import {Container, ContentWrapper, IMGContainer, Wrapper} from './styles';

function MedicCard(): JSX.Element {
  return (
    <Container>
      <IMGContainer/>
      <ContentWrapper>
        <h1>Dr. Felipe Neris</h1>
        <Wrapper>
          <p>Medicina da Família</p>
          <p>Crm 25097 - SC</p>
        </Wrapper>
        <p className={'infos'}>
          Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.
          Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow
          medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do
          modelo de consulta de 20 minutos que domina os consultórios atualmente.
        </p>
        <div className={'price-info-container'}>

          <h1 className={'price-info-title'}>
            Valor da Consulta:
          </h1>
          <h1 className={'price-info-value'}>
            R$250,00
          </h1>
        </div>
        <button>Agendar consulta</button>
      </ContentWrapper>

    </Container>
  );
}

export {MedicCard};
