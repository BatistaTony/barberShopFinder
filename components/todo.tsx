import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

interface TodoItemProps {
  title: string;
  isDone: boolean;
}

const TodoItem = ({title, isDone}: TodoItemProps) => {
  return (
    <TodoStyled>
      {isDone ? <CheckedBox /> : <CirceleUndone />}
      <Title>Hellow orld</Title>
    </TodoStyled>
  );
};

export default TodoItem;

const TodoStyled = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
  padding-left: 5px;
`;

const Title = styled.Text`
  font-size: 13;
  color: white;
`;

const CirceleUndone = styled.View`
  width: 17px;
  height: 17px;
  border-radius: 100;
  border: 1px solid dodgerblue;
  margin-right: 10px;
`;

const CheckedBox = styled.View`
  width: 20px;
  height: 13px;
  border: 1.5px solid dodgerblue;
  margin-right: 10px;
  transform: rotate(-35deg);
  border-top-color: transparent;
`;
