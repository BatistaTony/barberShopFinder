import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButtonText,
  CustomButton,
  SignMessageButtonText,
  SignMessageButton,
  SignMessageButtonTextBold,
} from './styles';

//@ts-ignore
import BarberLogo from './../../assets/barber.svg';
import SignInput from '../../components/signInput';
//@ts-ignore
import EmailIcon from './../../assets/email.svg';

//@ts-ignore
import LockIcon from './../../assets/lock.svg';

const SignIn = () => {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const navigation = useNavigation();

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case 'email': {
        setEmailField(value);
        break;
      }

      case 'password': {
        setPasswordField(value);
        break;
      }
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  const handleSignClick = () => {};

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          placeholder="User name"
          value={emailField}
          IconSvg={EmailIcon}
          onChangeText={(value) => handleChange('email', value)}
        />
        <SignInput
          placeholder="password"
          value={passwordField}
          IconSvg={LockIcon}
          secureTextEntry={true}
          onChangeText={(value) => handleChange('password', value)}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Ainda nn tem uma conta ?</SignMessageButtonText>
        <SignMessageButtonTextBold>cadastra-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

export default SignIn;
