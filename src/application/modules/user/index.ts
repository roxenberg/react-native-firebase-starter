import {UserActionType, UserActions} from './actions';

export const userDefaultState = {
  data: {
    id: '',
    name: '',
    email: '',
  },
  loading: false,
  error: null,
};

export type UserState = typeof userDefaultState;

export const selectUser = (state: {user: UserState}) => state.user;

export const userReducer = (
  state = userDefaultState,
  action: UserActionType<UserState>,
) => {
  switch (action.type) {
    case UserActions.LOAD_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserActions.LOAD_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload?.data ?? state.data,
      };
    case UserActions.LOAD_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error ?? null,
      };

    default:
      return state;
  }
};

export const config = {
  key: 'user',
  reducer: userReducer,
  actions: UserActions,
};
