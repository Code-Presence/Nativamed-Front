import React from 'react';
import styled from 'styled-components';

function PathologyInput(): JSX.Element {
  return (
    <Container>
      <h3>Patologia</h3>
      <select id="pathology" name="patologia" placeholder={''}>
        <option value="none">Tipo de patologia</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  gap: 0.8rem;

  & h3 {
    margin: 0;
  }

  & option {
    font-family: 'Montserrat', sans-serif;
  }

  & select {
    height: 2.5rem;
    border-radius: 4px;
    background-color: #FAFAFA;
    border: 1px solid rgba(51, 85, 75, 0.20);
      padding-left: 10px;
    cursor: pointer;
  }
`;

export {PathologyInput};
