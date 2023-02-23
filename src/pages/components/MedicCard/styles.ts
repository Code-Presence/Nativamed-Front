import styled from 'styled-components';

export const Container = styled.div`
  width: 330px;
  height: 46rem;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

`;
export const IMGContainer = styled.div`
  width: 100%;
  height: 280px;
  background-color: blue;
  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 10px;


  letter-spacing: 0.8px;

  & h1 {
    margin: 0;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    color: rgba(66, 95, 75, 1)
  }

  & .infos {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    color: rgba(66, 95, 75, 1);
    letter-spacing: normal;

  }

  & .price-info-container {
    height: fit-content;
    width: 100%;
  }


  & .price-info-title {
    font-size: 20px;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    color: rgba(66, 95, 75, 1)
  }

  & .price-info-value {
    font-size: 20px;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    color: rgba(66, 95, 75, 1)
  }

  & button {
    width: 100%;
    height: 40px;
    background-color: #33554B;
    border: none;
    border-radius: 4px;
    color: white;

    margin-top: 10px;

    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 0.9px;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  & p {
    margin: 0;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    color: #425F4B;
    font-weight: 500;
  }
`;
