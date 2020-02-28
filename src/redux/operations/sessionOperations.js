import {
  loginRequest,
  loginSuccess,
  loginError,
} from '../actions/sessionActions';
import { authUser } from '../../helpers/api';

export const login = data => dispatch => {
  dispatch(loginRequest(data));

  authUser()
    .then(response => {
      dispatch(loginSuccess(response));
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};
