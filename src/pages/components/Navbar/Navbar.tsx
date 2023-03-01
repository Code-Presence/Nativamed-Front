import {useEffect, useState, MouseEventHandler} from 'react';

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

  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <Navbar>
      <NavbarContainer>
        <img src={Logo} alt={'logo'} className={'logo-main'}/>
        <NavMenu>
          <NavLinks className={navActive ? 'nav-active' : ''}>
            <NavLink>
              <a href={url} onClick={handleClick} >Tenho prescrição</a>
            </NavLink>
            <NavLink>
              <a href="#sobre" onClick={handleLinkClick}>Sobre o tratamento</a>
            </NavLink>
            <NavLink>
              <a href="#faq" onClick={handleLinkClick}>Perguntas frequentes</a>
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
