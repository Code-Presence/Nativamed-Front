import styled from 'styled-components';

export const Container = styled.div`
  //background-color: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & .faq-item{
  }

  & .faq-question {
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding-left: 14px;
    padding-right: 14px;
    border-radius: 4px;



    & h1 {
      margin: 0;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
    }
  }

  & .faq-answer {
    padding-left: 14px;
    padding-right: 14px;

  }
`;
