import {useEffect, useState } from 'react';

import {
  Navbar,
  NavbarContainer,
  NavLinks,
  NavLink,
  NavMenu,
  Burger,
  BurgerLine,
} from './styles';
import Logo from '../../../assets/logo.png';


const Nav = () => {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    if (navActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [navActive]);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <Navbar>
      <NavbarContainer>
        <img src={Logo} alt={'logo'} className={'logo-main'}/>
        <NavMenu>
          <NavLinks className={navActive ? 'nav-active' : ''}>
            <NavLink>
              <a href="#tenho-prescricao">Tenho prescrição</a>
            </NavLink>
            <NavLink>
              <a href="#sobre-o-tratamento">Sobre o tratamento</a>
            </NavLink>
            <NavLink>
              <a href="#-perguntas-frequentes">Perguntas frequentes</a>
            </NavLink>
            <NavLink>
              <a href="#">Blog</a>
            </NavLink>
            <NavLink>
              <a href="#">Entrar em contato</a>
            </NavLink>
          </NavLinks>
          <Burger onClick={toggleNav}>
            <BurgerLine className={navActive ? 'toggle' : ''} />
            <BurgerLine className={navActive ? 'toggle' : ''} />
            <BurgerLine className={navActive ? 'toggle' : ''} />
          </Burger>
        </NavMenu>
      </NavbarContainer>
    </Navbar>
  );
};

export default Nav;
