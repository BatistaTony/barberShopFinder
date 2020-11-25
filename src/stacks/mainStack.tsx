import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/preload/preload';
import SignIn from '../screens/signIn/signIn';
import SignUp from '../screens/signUp/signUp';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default MainStack;
