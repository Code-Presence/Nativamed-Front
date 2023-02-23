import styled from 'styled-components';
import backgroundUp from '../../assets/BG-upgraded.png';
import FolhasBG from '../../assets/folhas.png';
import PlantasCortadas from '../../assets/plantinhas-2.png';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;


  & .img-da-muie {
    width: 500px;
    @media screen and (max-width: 500px) {
      width: 340px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const FirstSection = styled.div`
  width: 100%;
  height: 720px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    height: fit-content;
    width: 100%;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
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
      width: 100%;
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
      flex-direction: column-reverse;
      width: 95%;

      height: fit-content;
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
      width: 95%;
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
    }
  }

  & .pre-title {
    // p
    font-size: 22px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
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
    font-family: "Montserrat", sans-serif;
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

  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media screen and (max-width: 500px) {
    height: 400px;
    background-color: #FAFAFA;

    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
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
      & .second-sec-left-wrapper {
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

  & .second-sec-left-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .second-sec-right-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      width: 100%;
      text-align: center;
      height: 300px;
      background-color: #FAFAFA;
    }


    & h1 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 36px;
      margin: 0;
      color: #425f4b;

      @media screen and (max-width: 500px) {
        font-size: 22px;
      }
    }

    & p {
      font-size: 20px;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      color: #345249;
      margin: 0;

      @media screen and (max-width: 500px) {
        font-size: 14px;
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
        width: 95%;
        height: 3rem;
        font-size: 18px;
      }
    }
  }

`;

export const ThirdSection = styled.div`
  width: 100%;
  height: 850px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: fit-content;
  }

  & .third-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      height: fit-content;
    }

    & .third-left-wrapper {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 500px) {
        width: 100%;
      }

      & .third-text-wrapper {
        width: 490px;
        height: 600px;
        gap: 1rem;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 500px) {
          width: 90%;
          padding-top: 2rem;
          height: fit-content;
        }

        & h4 {
          font-size: 18px;
          font-weight: bolder;
          font-family: "Montserrat", sans-serif;
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
          font-family: "Montserrat", sans-serif;
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

          @media screen and (max-width: 500px) {
            width: 80%;
          }
        }
      }
    }

    & .third-right-wrapper {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & img {
        width: 450px;
        border-radius: 8px;
        box-shadow: 2.2px 2.2px 6.59px rgba(0, 0, 0, 0.25);
      }

      @media screen and (max-width: 500px) {
        width: 100%;
        height: fit-content;
        padding-top: 2rem;
        padding-bottom: 2rem;
        align-items: normal;
        justify-content: normal;

        display: none;

        & img {
          display: none;
          //width: 50%;
          //margin-left: 1.5rem;
        }
      }
    }
  }
`;

export const IMGDivider = styled.div`
  width: 100%;
  display: none;
  padding-top: 1.5rem;
  background-color: white;

  background-image: url(${PlantasCortadas});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: bottom right;
  //background-position-y: 10px ;

  @media screen and (max-width: 500px) {
    display: flex;
    height: 380px;
    justify-content: center;
    //align-items: center;
    & .divider-wrapper {
      position: absolute;
      width: 90%;
      height: 400px;
      display: flex;
      justify-content: space-between;
    }

    & .frasco {
      width: 200px;
      height: 200px;
      border-radius: 8px;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
      //padding-left: 1.5rem;
    }

    & .plantas {
      padding-top: 35%;
      overflow: hidden;
      width: 300px;
      object-fit: contain;
      padding-left: 1.5rem;
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

  @media screen and (max-width: 500px) {
    height: fit-content;
    flex-direction: column;
    background-color: white;
  }

  & .fourth-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .forth-content-wrapper {
      width: 95%;
      display: flex;

      @media screen and (max-width: 500px) {
        flex-direction: column;
      }
    }
  }

  & .fourth-left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;
      width: 100%;
      align-items: normal;
      justify-content: normal;
      margin-top: 6rem;
    }

    & .left-text {
      width: 500px;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      @media screen and (max-width: 500px) {
        width: 80%;
        padding-top: 2rem;
        position: absolute;
      }

      & h4 {
        font-size: 22px;
        font-family: 'Montserrat', sans-serif;
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

        @media screen and (max-width: 500px) {
          font-size: 22px;
        }
      }

      & p {
        font-size: 24px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin: 0;

        @media screen and (max-width: 500px) {
          font-size: 18px;
        }
      }
    }

    & .left-img {
      width: 100%;
      height: fit-content;

      & img {
        width: 600px;

        @media screen and (max-width: 500px) {
          //width: 320px;
          display: none;
        }
      }
    }
  }

  & .fourth-right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      width: 100%;
      padding-top: 2rem;
    }

    & .right-text {
      width: 600px;
      display: flex;
      flex-direction: column;
      gap: 4rem;

      @media screen and (max-width: 500px) {
        width: 100%;
        gap: 1.5rem;
      }

      & .content-container {
        display: flex;
        width: 100%;

        & img {
          width: 100px;
          height: 100px;
          padding-right: 10px;

          @media screen and (max-width: 500px) {
            width: 80px;
            height: 80px;
          }
        }

        & .text-wrapper {
          height: fit-content;

          & p {
            margin: 0;
            padding-top: 10px;
            font-size: 22px;
            font-family: 'Montserrat', sans-serif;

            @media screen and (max-width: 500px) {
              font-size: 16px;
            }
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

    @media screen and (max-width: 500px) {
      padding-top: 1.5rem;
    }

    & h1 {
      width: 400px;
      text-align: center;
      font-size: 28px;
      font-family: 'Montserrat', sans-serif;
      color: #33554B;

      @media screen and (max-width: 500px) {
        font-size: 22px;
      }

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

      @media screen and (max-width: 500px) {
        font-size: 16px;
      }
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

  @media screen and (max-width: 500px) {
    height: fit-content;
  }

  & .fifth-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 3rem;

    @media screen and (max-width: 500px) {
      height: fit-content;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }

  & .fifth-first-container {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    & .text-wrapper {
      background-color: white;
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
      border-radius: 8px;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);

      @media screen and (max-width: 500px) {
        width: 75%;
      }

      & h1 {
        width: 350px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 28px;
        text-align: center;

        color: #33554B;

        @media screen and (max-width: 500px) {
          width: 90%;
          font-size: 20px;
          line-height: 1.5rem;
        }

      }
    }
  }

  & .fifth-second-container {
    width: 100%;
    height: 600px;


  }

  & .fifth-third-container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;


    & h1 {
      width: 400px;
      text-align: center;
      margin: 0;
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

export const SixthSection = styled.section`
  width: 100%;
  height: 920px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-image: url(${FolhasBG});
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: right;
  background-position-y: bottom;

  @media screen and (max-width: 500px) {
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: right;
    background-position-y: top;
    padding-bottom: 10rem;

    //background-position: right;
    //background-position-y: bottom;
  }

  overflow: hidden;

  & .six-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;
      width: 100%;
      height: fit-content;
      gap: 2rem;
      padding-top: 8rem;
    }

    //& .folhas {
    //  position: absolute;
    //  margin-left: 60rem;
    //}
  }

  & .six-left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;
      width: 95%;

      height: fit-content;
      justify-content: flex-start;
      text-align: center;

    }

    & img {
      width: 600px;
      border-radius: 8px;
      box-shadow: 2.2px 2.2px 6.59px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 500px) {
        width: 95%;
      }

    }
  }

  & .six-right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      width: 95%;
      height: fit-content;
    }
  }

  & .six-text-wrapper {
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding-left: 2rem;

    @media screen and (max-width: 500px) {
      width: 100%;
      gap: 0.5rem;
      //height: 100%;
    }

    & h4 {
      font-size: 18px;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      color: #345249;
      margin: 0;
    }

    & h1 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 28px;
      margin: 0;
      color: #425f4b;

      @media screen and (max-width: 500px) {
        font-size: 22px;
      }
    }

    & p {
      font-size: 18px;
      font-weight: 400;
      font-family: "Montserrat", sans-serif;
      color: #345249;
      margin: 0;

      @media screen and (max-width: 500px) {
        font-size: 16px;
        width: 320px;
        color: black
      ;
      }
    }
  }


`;

export const SeventhSection = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FAFAFA;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 550px;
  background-color: #33554B;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: fit-content;
    padding-top: 3rem;
    padding-bottom: 3rem;

  }

  & .footer-wrapper {
    display: flex;
    gap: 88px;
    padding-bottom: 4rem;

    @media screen and (max-width: 500px) {
      gap: 10px;
    }
  }

  & .logo-container {
    padding-right: 32px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 500px) {
      & img {
        width: 170px;
      }
    }

    & .respons-icon-container {
      display: none;


      @media screen and (max-width: 500px) {
        display: flex;
        gap: 10px;
        font-size: 28px;
        color: white;
        padding-top: 1rem;
      }
    }
  }

  & .icons-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 28px;
    color: white;

    @media screen and (max-width: 500px) {
      display: none;
    }


  }

  & .option-container-1 {
    color: white;
    font-family: Montserrat, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & p {
      margin: 0;
    }
  }

  & .option-container-2 {
    color: white;
    font-family: Montserrat, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media screen and (max-width: 500px) {
      display: none;
    }

    & p {
      margin: 0;
    }
  }

  & .line {
    background-color: rgba(249, 249, 249, 0.2);
    width: 1100px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  & .links-wrapper {
    padding-top: 25px;
    display: flex;
    color: rgba(249, 249, 249, 0.6);
    gap: 32px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    & .respons-divider {
      display: flex;
      gap: 32px;

      @media screen and (max-width: 500px) {
        flex-direction: column;
      }

    }
  }

`;
