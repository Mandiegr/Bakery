import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #673117;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 60px; }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #F1EAD0;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background-color: #F1EAD0;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuItemsContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  background-color: #673117;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  a {
    color: #fff;
    font-size: 18px;
    padding: 10px;
    text-align: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
