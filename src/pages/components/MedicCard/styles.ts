import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 50rem;
  border-radius: 8px;
  border: 1px solid #c4c4c4;

`;
export const IMGContainer = styled.div`
  width: 100%;
  height: 20rem;
  background-color: blue;
  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  letter-spacing: 0.8px;
  padding-right: 10px;

  & h1 {
    margin: 0;
    font-size: 26px;
    font-family: 'Montserrat', sans-serif;
    color: rgba(66, 95, 75, 1)
  }

  & .infos {
    font-size: 18px;
    color: rgba(66, 95, 75, 1);
    letter-spacing: normal;

  }

  & .price-info-title {
    color: rgba(66, 95, 75, 1)
  }

  & .price-info-value {
    color: rgba(66, 95, 75, 1)
  }

  & button {
    width: 100%;
    height: 50px;
    background-color: #33554B;
    border-radius: 4px;
    color: white;
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
  }
`;
