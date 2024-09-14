import styled from 'styled-components';
import banner from '../img/Banner.png';


export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 491px) {
    height: 100vh;
  }
`;

export const NameContainer = styled.div`
  position: absolute;
  top: 40%;
  color: #F1EAD0;
  padding-left: 2rem;
  text-align: center;
  background-color: hsla(33, 40%, 89%, 0.20); 
  width: 100%;
  p {
    font-size: 50px;

  
    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 491px) {
      font-size: 16px;
      padding-left: 0;
      text-align: center;
    }
  }
  

  @media (max-width: 491px) {
    position: static;
    transform: none;
    top: auto;
    left: auto;
    text-align: center;
    padding: 0;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  flex-direction: column;
  top: 60%;
  color: white;
  padding-left: 2rem;
  font-size: 20px;
  line-height: 1.5;
  margin-top: 3rem;


 @media (min-width: 1024px) {
  }

  @media (max-width: 768px) {
    top: 60%;
    font-size: 16px;
    padding: 1rem;
    margin-top: 2rem;
  }

  @media (max-width: 491px) {
    position: static;
    top: auto;
    left: auto;
    transform: none;
    text-align: center;
    padding: 0;
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 491px) {
    font-size: 12px;
    padding: 6px 12px;
    margin-top: 30px;
  }
`;


export const IconContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  white-space: nowrap;
  align-items: center;
  min-height: 60px;
  gap: 20px;


  @media (max-width: 491px) {
    gap: 10px;

  }

`;

export const Icon = styled.div`
  font-size: 40px;


`;