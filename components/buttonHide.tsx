import * as React from 'react';
import {} from 'react-native';
import styled from 'styled-components/native';

const ButtonHideCompletedTask = () => {
  return (
    <Button>
      <TextButton>Hide completed task</TextButton>
    </Button>
  );
};

export default ButtonHideCompletedTask;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
`;

const TextButton = styled.Text`
  color: dodgerblue;
  font-size: 13;
`;
