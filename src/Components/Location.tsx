import {
    ContactContainer,
    LeftSide,
    Image,
    RightSide,
    Title,
    Description,
    ContactDetails,
   
  } from '../styles/Location';
  
  const Location = () => {
    return (
      <ContactContainer>
        <LeftSide>
          <Image src="https://image.cdn2.seaart.ai/2024-09-13/crhslete878c73ap6h80/10673c5b86af6741013c2a1fbb12c61352b67eb2_high.webp " alt="Location" />
        </LeftSide>
        <RightSide>
        <Title>Panificadora Pão Amigo Cia</Title>
          <Description>
            <Title>Endereço</Title>
            Rua Qualquer, 123
           Cidade Qualquer, Estado, País
          <ContactDetails>
           Tel (12) 3456-7890
          </ContactDetails>
          </Description>
         
        </RightSide>
      </ContactContainer>
    );
  };
  
  export default Location;