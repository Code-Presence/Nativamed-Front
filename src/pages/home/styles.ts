import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
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
  width: 540px;
  height: 370px;
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
  font-size: 22px;
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
`;
export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
