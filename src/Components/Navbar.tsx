import { useState } from 'react';
import { HeaderContainer, ContainerRight, Nav, NavLink, Logo,  MenuItemsContainer, HamburgerIcon } from '../styles/Navbar';
import logo from '../img/logo.png';                                                                      

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <ContainerRight>
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#about">About US</NavLink>
          <NavLink href="#location">Location</NavLink>
        </Nav>
        <HamburgerIcon onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
      </ContainerRight>

      {menuOpen && (
        <MenuItemsContainer>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#about">About US</NavLink>
          <NavLink href="#location">Location</NavLink>
         
        </MenuItemsContainer>
      )}
    </HeaderContainer>
  );
};

export default Navbar;
