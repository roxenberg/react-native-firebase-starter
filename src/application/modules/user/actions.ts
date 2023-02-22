export const UserActions = {
  LOAD_USER_DATA_REQUEST: 'LOAD_USER_DATA_REQUEST',
  LOAD_USER_DATA_SUCCESS: 'LOAD_USER_DATA_SUCCESS',
  LOAD_USER_DATA_FAILURE: 'LOAD_USER_DATA_FAILURE',
};

export type UserActionType<S> = {
  type: keyof typeof UserActions;
  payload?: Partial<S>;
};
