import styled from 'styled-components/native';
import Colors from './../../../constants/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: ${Colors.buttonColor};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: ${Colors.buttonColor};
  margin-right: 5px;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: ${Colors.buttonColor};
  font-weight: bold;
`;
