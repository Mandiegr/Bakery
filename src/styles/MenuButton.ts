import styled from 'styled-components';

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuItemsContainer = styled.div`
  position: absolute;
  top: 70px;
  right: -10px;
  background-color: #161616;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  z-index: 10;

  a {
    color: white;
    margin: 10px 0;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: chocolate;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;