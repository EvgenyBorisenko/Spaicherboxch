export const ActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

export const loginRequest = data => ({
  type: ActionType.LOGIN_REQUEST,
  payload: { data },
});

export const loginSuccess = response => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: { response },
});

export const loginError = error => ({
  type: ActionType.LOGIN_ERROR,
  payload: { error },
});

export const logout = error => ({
  type: ActionType.LOGOUT,
});
