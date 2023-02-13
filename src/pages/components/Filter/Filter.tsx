import React from 'react';
import styled from 'styled-components';
import {PriceSlider} from './Slider';
import { BiSliderAlt } from 'react-icons/bi';
import { PathologyInput } from './PathologyInput';
import {SpecialityInput} from './SpecialityInput';

function Filter(): JSX.Element {
  return (
    <Container>
      <SearchHere placeholder={'Busque aqui'}/>
      <TitleWrapper>
        <BiSliderAlt
          style={{
            fontSize: '26px'
          }}
        />
        <h1>Filtrar por:</h1>
      </TitleWrapper>
      <PriceSlider />
      <PathologyInput />
      <SpecialityInput />
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  height: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 24px;
  gap: 20px;

  border: 1px solid #c4c4c4;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & h1{
    font-family: 'Montserrat', sans-serif;
  }
`;

const SearchHere = styled.input`
  height: 2.5rem;
  width: 90%;
  border-radius: 4px;
  background-color: #FAFAFA;
  border: 1px solid rgba(51, 85, 75, 0.20);
  padding-left: 10px;
  text-align: center;
  font-size: 16px;
  font-lin
  //font-family: 'Montserrat';
`;

export { Filter };


