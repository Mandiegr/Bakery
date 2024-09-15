import styled from 'styled-components';

export const MenuContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  box-sizing: border-box;
  background-color: #F1EAD0;

  @media (max-width: 884px) {
    flex-direction: column;
    justify-content: center; 
     padding: 2rem;
  }
  @media (max-width: 490px) {
     padding: 2rem;
  }

 
`;

export const ImageContainer = styled.div`
  text-align: center;
  width: 30%;
  height:auto;
 // background: #D9B287;
 // border-radius: 50%;


  @media (max-width: 768px) {
    width: 70%;
    text-align: center;

  }

  @media (max-width: 330px) {
    width: 80%;
    text-align: center;

  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #673117;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AboutImage = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;

  @media (max-width: 884px) {
    width: 50%;
  }
  @media (max-width: 540px) {
    width: 50%;
  }
  @media (max-width: 375px) {
    width: 50%;
  }
`;


export const TextContainer = styled.div`
  width: 40%;
  color: #673117;
 
  @media (max-width: 884px) {
    width: 100%;
  }
  @media (max-width: 375px) {
      padding-top: 50px;
    
  }
`;



export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  letter-spacing: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    text-align: justify;
  }
`;
export const Value = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  letter-spacing: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    text-align: justify;
  }
`;