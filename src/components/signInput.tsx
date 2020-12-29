import React from 'react';
import styled from 'styled-components/native';
import Colors from './../../constants/colors';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${Colors.input};
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  color: ${Colors.buttonColor};
  font-size: 16px;
  margin-left: 10px;
`;

interface IProps {
  IconSvg: any;
  onChangeText: any;
}

const SignInput = ({IconSvg, onChangeText, ...props}: IProps) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill={Colors.buttonColor} />
      <Input
        {...props}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.buttonColor}
      />
    </InputArea>
  );
};

export default SignInput;
