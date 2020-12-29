interface IState {
  avatar: string;
  favorites: Array<any>;
  appoitments: Array<any>;
}

export const initialState: IState = {
  avatar: '',
  favorites: [],
  appoitments: [],
};

interface IAction {
  type: string;
  payload?: any;
}

export const UserReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'setAvatar': {
      return {...state, avatar: action.payload.avatar};
    }

    default: {
      return state;
    }
  }
};
