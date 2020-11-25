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
import ButtonHideCompletedTask from './components/buttonHide';
import Header from './components/header';
import TodoItem from './components/todo';

const App: () => React.ReactNode = () => {
  const todos = [
    {
      title: 'Dine',
      isDone: false,
    },
    {
      title: 'Beijoo',
      isDone: true,
    },
  ];

  return (
    <MainContainer>
      <Header />
      <ButtonHideCompletedTask />

      <ListTodo
        data={todos}
        renderItem={(itemData, index) => (
          <TodoItem
            key={index}
            isDone={itemData.item.isDone}
            title={itemData.item.title}
          />
        )}
      />
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #20202d;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const ListTodo = styled.FlatList`
  width: 100%;
  margin-top: 25px;
`;

export default App;
