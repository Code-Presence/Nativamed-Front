import {useEffect, useState} from 'react';

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

  const url = 'https://api.whatsapp.com/send?phone=5547996314944&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta';
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();
    window.open(url, '_blank');
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
              <a href="#faq">Perguntas frequentes</a>
            </NavLink>
            <NavLink>
              <a href="#">Blog</a>
            </NavLink>
            <NavLink>
              <a href={url} onClick={handleClick}>Entrar em contato</a>
            </NavLink>
          </NavLinks>
          <Burger onClick={toggleNav}>
            <BurgerLine className={navActive ? 'toggle' : ''}/>
            <BurgerLine className={navActive ? 'toggle' : ''}/>
            <BurgerLine className={navActive ? 'toggle' : ''}/>
          </Burger>
        </NavMenu>
      </NavbarContainer>
    </Navbar>
  );
};

export default Nav;
