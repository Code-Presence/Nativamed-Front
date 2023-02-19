import styled from 'styled-components';
import backgroundUp from '../../assets/BG-upgraded.png';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;

  & .img-da-muie {
    width: 500px;
    @media screen and (max-width: 500px) {
      width: 340px;
    }
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 85px;
  background-color: #34554e;
  display: flex;
  align-items: center;
  justify-content: center;

  & .nav-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    & img {
      width: 246px;
      height: 33px;
    }

    & p {
      font-size: 18px;
      font-family: "Raleway", sans-serif;
      color: #fff;

      @media screen and (max-width: 500px) {
          display: none;
      }
    }
  }
`;
export const FirstSection = styled.div`
  width: 100%;
  height: 720px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    height: fit-content;
  }

  & .first-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;
    }
  }

  & .first-left-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      width: 90%;
      height: 450px;
      justify-content: flex-start;
      text-align: center;
    }
  }

  & .first-right-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      width: 100%;
      height: 450px;
    }
  }

  & .first-text-wrapper {
    width: 550px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
      width: 100%;
      height: 100%;
      justify-content: center;
      gap: 1rem;
    }
  }

  & .pre-title{
    // p
    font-size: 22px;
    font-weight: 400;
    font-family: "Raleway", sans-serif;
    color: #345249;
    margin: 0;

    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }

  & .title {
  // h1
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  margin: 0;
  color: #425f4b;

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
  }

 & .sub-title {
   // h1
  font-size: 20px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: #345249;
  margin: 0;

  @media screen and (max-width: 500px) {
  font-size: 14px;
  }
 }

& .footer-title {
  // p
  font-size: 22px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  color: #345249;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
}

  & button {
    height: 50px;
    width: 385px;
    border-radius: 8px;
    border: none;
    background-color: #33554b;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    margin-top: 30px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      width: 100%;
      height: 3rem;
      font-size: 18px;
    }
  }

`;
export const SecondSection = styled.section`
  width: 100%;
  height: 600px;
  background-color: white;

  @media screen and (max-width: 500px) {
  height: 400px;
  }

  & .divider {
    width: 100%;
    height: 550px;
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      height: 100%;
    }
  }

  & .second-sec-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      & .second-sec-left-wrapper{
        display: none;
      }
    }
  }
  & .laptop {
    width: 400px;
    margin-top: 220px;
    position: absolute;
    border-radius: 8px;

    box-shadow: 2.2px 2.2px 6.59px rgba(0, 0, 0, 0.25);
  }
`;
export const ThirdSection = styled.div`
  width: 100%;
  height: 850px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  & .third-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;

    & .third-left-wrapper {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & .third-text-wrapper {
        width: 490px;
        height: 600px;
        gap: 1rem;
        display: flex;
        flex-direction: column;

        & h4 {
          font-size: 18px;
          font-weight: bold;
          font-family: "Raleway", sans-serif;
          color: #345249;
          margin: 0;
        }

        & h2 {
          font-size: 32px;
          margin: 0;
          font-family: "Montserrat", sans-serif;
          color: #345249;
          font-weight: 600;
        }

        & p {
          font-size: 20px;
          font-weight: 400;
          font-family: "Raleway", sans-serif;
          color: #345249;
          margin: 0;
        }

        & button {
          height: 50px;
          width: 385px;
          border-radius: 8px;
          border: none;
          background-color: #33554b;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #fff;
          margin-top: 30px;
          cursor: pointer;
        }
      }
    }

    & .third-right-wrapper {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & img {
        width: 450px;
        border-radius: 8px;
        box-shadow: 2.2px 2.2px 6.59px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
export const FourthSection = styled.div`
  width: 100%;
  height: 1300px;
  background-color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fourth-wrapper{
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .fourth-left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .left-text {
      width: 500px;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      & h4 {
        font-size: 22px;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        color: #33554B;
        margin: 0;
      }

      & h1 {
        font-size: 32px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: #33554B;
        margin: 0;
      }

      & p {
        font-size: 24px;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        margin: 0;
      }
    }

    & .left-img {
      width: 100%;
      height: fit-content;

      & img {
        width: 600px;
      }
    }

  //  @media screen and (max-width: 500px) {
  //    width: 90%;
  //    height: 450px;
  //    justify-content: flex-start;
  //    text-align: center;
  //}
  }
  & .fourth-right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .right-text {
      width: 600px;
      display: flex;
      flex-direction: column;
      gap: 4rem;

      & .content-container {
        display: flex;
        width: 100%;


        & img {
          width: 100px;
          height: 100px;
          padding-right: 10px;
        }

        & .text-wrapper {
          height: fit-content;

          & p {
          margin: 0;
            padding-top: 10px;
            font-size: 22px;
            font-family: 'Raleway', sans-serif;
          }
        }
      }
    }
  }
  & .bottom-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h1 {
      width: 400px;
      text-align: center;
      font-size: 28px;
      font-family: 'Montserrat', sans-serif;
      color: #33554B;
    }

    & button {
      width: 385px;
      height: 3rem;
      border-radius: 8px;
      border: none;
      background-color: #33554B;
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }
`;
export const FifthSection = styled.section`
  width: 100%;
  height: 1000px;
  max-height: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${backgroundUp});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: bottom;
`;
export const SixthSection = styled.section`
  width: 100%;
  height: 920px;
  display: flex;
  align-items: center;
  justify-content: center;
background-color: white;
`;

export const TextWrapper = styled.div`
  width: 550px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const PreTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  color: #345249;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }

`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  margin: 0;
  color: #425f4b;

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;
export const SubTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: #345249;
  margin: 0;

  @media screen and (max-width: 500px) {
  font-size: 14px;
  }
`;

export const FooterTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  color: #345249;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;



`;

export const Button = styled.button`
  height: 50px;
  width: 385px;
  border-radius: 8px;
  border: none;
  background-color: #33554b;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  margin-top: 30px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 3rem;
    font-size: 18px;
  }

`;
export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
  width: 100%;
  height: 450px;
  }

  & .second-sec-right-wrapper {
    width: 95%;
    text-align: center;
    gap: 1rem;
    height: 60%;
  }

`;

export const Wrapper = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1px solid red;

`;


export const Text = styled.p`
  font-family: Ubuntu, sans-serif;
  font-size: 26px;
  font-weight: lighter;
  color: #33554B;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 550px;
  background-color: #33554B;
`;
