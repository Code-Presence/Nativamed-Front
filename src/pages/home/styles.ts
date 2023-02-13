import styled from 'styled-components';
import background from '../../assets/BG.png';
import backgroundUp from '../../assets/BG-upgraded.png';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #eee;
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

export const Navbar = styled.div`
  width: 100%;
  height: 85px;
  background-color: #34554e;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & img {
    width: 246px;
    height: 33px;
  }

  & p {
    font-size: 18px;
    font-family: "Raleway", sans-serif;
    color: #fff;
  }
`;

export const FirstSection = styled.div`
  width: 100%;
  height: 740px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  width: 500px;
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
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  margin: 0;
  color: #425f4b;
`;
export const SubTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: #345249;
  margin: 0;
`;

export const FooterTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  color: #345249;
  margin: 0;
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
`;
export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const SecondSection = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
`;

export const SeconSectionDivider = styled.div`
  width: 100%;
  height: 550px;
  background-color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThirdSection = styled.div`
  width: 100%;
  height: 970px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FourthSection = styled.div`
  width: 100%;
  height: 1300px;
  background-color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FifthSection = styled.section`
  width: 100%;
  height: 1000px;
  max-height: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${backgroundUp});
  background-size: 120%;
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
