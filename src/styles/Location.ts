import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 40px;
  background-color: #F1EAD0;

  @media (max-width: 912px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 912px) {
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 912px) {
    width: 100vw;
    height: 50vh;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  padding: 20px;

  @media (max-width: 912px) {
    padding: 10px; 
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #673117;
  margin-bottom: 10px;

  @media (max-width: 912px) {
    font-size: 3rem;
  }

  @media (max-width: 419px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #673117;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Detail = styled.div`
  font-size: 1rem;
  color: #673117;
`;
