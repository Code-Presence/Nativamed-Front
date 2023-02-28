import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';

const PriceSlider = () => {

  // Our States
  const [value, setValue] =  React.useState([50, 500]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event: any, newValue: any) => {
    setValue(newValue);
    console.log(newValue);
  };


  return (
    <Container>
      <Title>Preço</Title>
      <Typography id="range-slider" gutterBottom>
        Intervalo de preço:
      </Typography>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        max={500}
        min={50}
        style={{
          width: '100%'}
        }
      />
      <SubTitle>
      R${value[0]},00 - R${value[1]},00
      </SubTitle>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
`;

const SubTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export {PriceSlider};
