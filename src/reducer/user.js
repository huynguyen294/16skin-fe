import { constants } from '../constants';
const { SET_IS_LOGIN, SET_USER_INFO } = constants;

export const initialState = { isLogin: false, userInfo: {} };

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_LOGIN:
      return { ...state, isLogin: payload };
    case SET_USER_INFO:
      return { ...state, userInfo: { ...state.userInfo, ...payload } };
    default:
      return state;
  }
};

export default UserReducer;
