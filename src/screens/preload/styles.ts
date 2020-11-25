import styled from 'styled-components/native';
import Colors from './../../../constants/colors';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingStyled = styled.ActivityIndicator`
  margin-top: 50px;
`;
