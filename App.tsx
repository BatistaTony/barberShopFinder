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
      <Text>Hello world App</Text>
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
  padding-left: 15px;
  padding-right: 15px;
`;

export default App;
