import styled from 'styled-components';
import backgroundUp from '../../../public/assets/BG-upgraded.png';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  overflow: hidden;

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

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .text-container {
    max-width: 1440px;
    width: 90%;
    height: fit-content;
    display: flex;
  }
  & .text-wrapper {
    width: 430px;
    margin-left: 1%;
    color: #425F4B;

    & p {
      font-size: 24px;
      font-family: Montserrat, sans-serif;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  //align-items: center;
  justify-content: center;

  background-image: url(${backgroundUp});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: bottom;

 & .wrapper {
   max-width: 1440px;
   width: 90%;
   height: fit-content;
   display: flex;

 }

  & .filter-n-card-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
  }

  & .card-wrapper {
    width: 78%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
  }


`;
