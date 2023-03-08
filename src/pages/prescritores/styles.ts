import styled from 'styled-components';
import backgroundUp from '../../../public/assets/BG-upgraded.png';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & .global-wrapper {
    max-width: 1440px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
`;

export const MainSection = styled.section`
  width: 100%;
  height: 100%;

  background-image: url(${backgroundUp});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: bottom;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .text-container {
    max-width: 1000px;
    width: 90%;
    height: fit-content;
    display: flex;
  }
  & .text-wrapper {
    width: 430px;
    color: #425F4B;

    & p {
      font-size: 24px;
      font-family: Montserrat, sans-serif;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 1280px;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //align-items: center;



  & .card-wrapper {
    max-width: 1000px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }



`;
