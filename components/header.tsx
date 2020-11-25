import React from 'react';

import {Image} from 'react-native';
import styled from 'styled-components/native';

export default function Header() {
  return (
    <HeaderStyled>
      <Title>Todo</Title>

      <ImageEdit source={require('./../assets/edit-2.png')} />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30;
  color: white;
`;

const ImageEdit = styled.Image`
  width: 30px;
  height: 30px;
`;
