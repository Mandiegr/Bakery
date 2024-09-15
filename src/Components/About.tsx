import {
    ContactContainer,
    LeftSide,
    Image,
    RightSide,
    Title,
    Description,
    ContactDetails,
    Detail,
  } from '../styles/About';
  
  const About = () => {
    return (
      <ContactContainer>
        <LeftSide>
        <Title>Estamos há mais de 10 anos </Title>
          <Description>
          </Description>
          <ContactDetails>
            <Detail>
              <strong>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration 
              in some form, by injected humour There are many variations of passages of Lorem Ipsum available, but the majority have s
              uffered alteration in some form, by injected humour
              </strong>
              </Detail>
            <Detail><strong>Tel</strong> (12) 3456-7890</Detail>
          </ContactDetails>
        </LeftSide>
        <RightSide>
        
          <Image src="https://image.cdn2.seaart.ai/2024-09-14/crj125de878c738b5r5g/f5588859a0ef215c0778513e9891772b00849dfd_high.webp" alt="Contato" />
        </RightSide>
      </ContactContainer>
    );
  };
  
  export default About;