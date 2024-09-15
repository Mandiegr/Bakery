import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pao from "../img/16.png";
import pao1 from "../img/23.png";
import pao3 from "../img/18.png";
import pao4 from "../img/3-3.png";
import pao5 from "../img/17.png";
import pao6 from "../img/19.png";
import pao8 from "../img/20.png";
import pao10 from "../img/21.png";
import pao11 from "../img/22.png";
import {
  AboutImage,
  Description,
  ImageContainer,
  MenuContainer,
  TextContainer,
  Title,
  Value,
} from '../styles/Menu';
import React from 'react';

const CustomPrevArrow = styled.div`
  &:before {
    color: #673117; 
  }
`;

const CustomNextArrow = styled.div`
  &:before {
    color: #673117;
  }
`;

const Menu = () => {
  const images = [
    { src: pao, alt: 'Pão 1', title: 'Cesta de Pães 1', description: 'Cesta de pães caseiros, frescos e saborosos.', value: 'R$40,00' },
    { src: pao1, alt: 'Pão 2', title: 'Cesta de Pães 2', description: 'Pães artesanais com ingredientes selecionados.', value: 'R$50,00' }, 
    { src: pao3, alt: 'Pão 3', title: 'Pão de Eva doce', description: 'Pão de Eva doce sem glúten.', value: 'R$8,00' },
    { src: pao4, alt: 'Pão 4', title: 'Bolo de milho', description: 'Bolo de milho da temporada passada.', value: 'R$25,00' },
    { src: pao5, alt: 'Pão 5', title: 'Bolo de chocolate ', description: 'Bolo de chocolate com cobertura de morango.', value: 'R$75,99' },
    { src: pao6, alt: 'Pão 6', title: 'Cesta de Pães de Queijo', description: 'Pão de queijo produzido Artesanalmente.', value: 'R$36,90' },
    { src: pao8, alt: 'Pão 8', title: 'Pão de chocolate', description: 'Pão com cobertura de  chocolate, 1 fatia .', value: 'R$5,00' },
    { src: pao11, alt: 'Pão 10', title: 'Pão de queijo redondo', description: 'Pão de queijo Artesanal de Minas.', value: 'R$20,60' },
    { src: pao10, alt: 'Pão 11', title: 'Pão de Queijo', description: 'Pão de Queijo Artesanal da Alemanha.', value: 'R$100,00' },
  ];
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
    beforeChange: (_current: any, next: React.SetStateAction<number>) => setActiveSlide(next),
  };

  const [activeSlide, setActiveSlide] = React.useState(0);

  return (

    <MenuContainer>
      <ImageContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <AboutImage key={index} src={image.src} alt={image.alt} />
          ))}
        </Slider>
      </ImageContainer>

      <TextContainer>
        <Title>{images[activeSlide].title}</Title>
        <Description>{images[activeSlide].description}</Description>
        <Value>{images[activeSlide].value}</Value>
      </TextContainer>
    </MenuContainer>
  );
};

export default Menu;

