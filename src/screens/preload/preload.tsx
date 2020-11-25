import React from 'react';
import {Text} from 'react-native';
import {Container, LoadingStyled} from './styles';
// import BarberLogo from './../../assets/barber.svg';
import BarberLogo from './svgs';

const Preload = () => {
  return (
    <Container>
      <Text>SVG IMG</Text>
      <LoadingStyled size="large" color="#fff" />
    </Container>
  );
};

export default Preload;
