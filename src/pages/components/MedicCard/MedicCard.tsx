import React from 'react';
import {Container, ContentWrapper, IMGContainer, Wrapper} from './styles';

interface IMedCardProp {
  name: string;
  workType: string;
  CRM: string;

  bio: string;
}

function MedicCard({name, workType, CRM, bio}: IMedCardProp): JSX.Element {
  return (
    <Container>
      <IMGContainer/>
      <ContentWrapper>
        <h1>{name}</h1>
        <Wrapper>
          <p>{workType}</p>
          <p>{CRM}</p>
        </Wrapper>
        <p className={'infos'}>
          {bio}
        </p>
        {/*<button>Agendar consulta</button>*/}
      </ContentWrapper>

    </Container>
  );
}

export {MedicCard};
