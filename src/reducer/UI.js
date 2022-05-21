import { constants } from '../constants';
const {
  SET_UI_LOGIN_BTN,
  SET_THEME,
  SET_UI_NOTIFICATION,
  SET_NAV_FIXED,
  SET_CONFIRM_CODE_MODAL_ACT,
  SET_ADD_VISA_CARD_MODAL_ACT,
  SET_CART_NOTIFICATION_ACT,
  SET_REGISTER_SUCCESS_MODAL_ACT,
} = constants;

export const initialState = {
  isLoginBtn: true,
  theme: true,
  isNotificationBtn: false,
  navFixed: false,
  confirmCodeModalAct: false,
  addVisaCardModalAct: false,
  cartNotificationAct: false,
  registerSuccessModalAct: false,
};

const UIReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_UI_LOGIN_BTN:
      return { ...state, isLoginBtn: payload };
    case SET_THEME:
      return { ...state, theme: payload };
    case SET_UI_NOTIFICATION:
      return { ...state, isNotificationBtn: payload };
    case SET_NAV_FIXED:
      return { ...state, navFixed: payload };
    case SET_CONFIRM_CODE_MODAL_ACT:
      return { ...state, confirmCodeModalAct: payload };
    case SET_ADD_VISA_CARD_MODAL_ACT:
      return { ...state, addVisaCardModalAct: payload };
    case SET_CART_NOTIFICATION_ACT:
      return { ...state, cartNotificationAct: payload };
    case SET_REGISTER_SUCCESS_MODAL_ACT:
      return { ...state, registerSuccessModalAct: payload };
    default:
      return state;
  }
};

export default UIReducer;
