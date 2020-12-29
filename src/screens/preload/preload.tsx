import React, {useEffect} from 'react';
import {Container, LoadingStyled} from './styles';
import {useNavigation} from '@react-navigation/native';

//@ts-ignore
import BarberLogo from './../../assets/barber.svg';

const Preload = () => {
  const navigation = useNavigation();

  const isLogged = true;

  useEffect(() => {
    const checkToken = () => {
      if (isLogged) {
        navigation.navigate('MainTab');
      } else {
        navigation.navigate('SignIn');
      }
    };

    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingStyled size="large" color="#fff" />
    </Container>
  );
};

export default Preload;
