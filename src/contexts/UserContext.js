import React, {createContext, useReducer} from 'react';
import {initialState, UserReducer} from './reducers/UserReducer';

export const UserContext = createContext({});

export default function UserContextProvider({children}) {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
}
