import styled from 'styled-components';

export const Navbar = styled.header`
  background-color: #34554E;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;

  @media screen and (max-width: 1000px){
    width: 100%;
  }
`;

export const NavbarContainer = styled.nav`
  max-width: 1250px;
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  gap: 80px;

  & .logo-main {
    width: 200px;
    @media screen and (max-width: 500px) {
      width: 150px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  @media screen and (max-width: 1500px){
    width: 100%;
  }
`;

export const Logo = styled.a`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 25px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 60px;
    left: -100%;
    width: 100vw;
    height: 100vh;
    background-color: rgba(52, 85, 78, 0.5);
    backdrop-filter: blur(10px);

    transition: all 0.3s ease;
    gap: 2rem;
    overflow: hidden;

    &.nav-active {
      left: 0;
      overflow: hidden;
      position: absolute;

      & a {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
`;

export const NavLink = styled.li`
  a {
    box-shadow: inset 0 0 0 0 #548c80;
    font-size: 16px;
    font-family: "Raleway", sans-serif;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin: 0 -.25rem;
    padding: 0 .25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    overflow: hidden;
      :hover {
         box-shadow: inset 100px 0 0 0 #548c80;
      }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding-left: 20%;

    a {
      text-align: center;
    }
  }
`;

export const Burger = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    margin-top: 5px;
  }
`;

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
  transition: all 0.3s ease;

  &.toggle:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  &.toggle:nth-child(2) {
    opacity: 0;
  }

  &.toggle:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  & .insta-wrapper{
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;
