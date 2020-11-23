/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const App: () => React.ReactNode = () => {
  return (
    <MainContainer>
      <Title>Just a template with a bunch of needed modules</Title>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #20202d;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 25;
  color: white;
`;

export default App;
