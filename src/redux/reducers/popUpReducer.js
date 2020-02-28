import { Type } from '../actions/popUpAction';

export default (prevState = false, action) => {
  switch (action.type) {
    case Type.OPEN_POP_UP:
      return true;

    case Type.CLOSE_POP_UP:
      return false;

    default:
      return prevState;
  }
};
