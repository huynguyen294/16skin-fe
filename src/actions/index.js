import { constants } from '../constants';

const {
  SET_THEME,
  SET_UI_LOGIN_BTN,
  SET_UI_NOTIFICATION,
  SET_NAV_FIXED,
  SET_IS_LOGIN,
  SET_USER_INFO,
  SET_CONFIRM_CODE_MODAL_ACT,
  SET_ADD_VISA_CARD_MODAL_ACT,
  SET_CART_NOTIFICATION_ACT,
  SET_REGISTER_SUCCESS_MODAL_ACT,
} = constants;

export const setTheme = (payload) => ({
  type: SET_THEME,
  payload,
});

export const setIsLoginBtn = (payload) => ({
  type: SET_UI_LOGIN_BTN,
  payload,
});

export const setIsNotificationBtn = (payload) => ({
  type: SET_UI_NOTIFICATION,
  payload,
});

export const setNavFixed = (payload) => ({
  type: SET_NAV_FIXED,
  payload,
});

export const setUserInfo = (payload) => ({
  type: SET_USER_INFO,
  payload,
});

export const setIsLogin = (payload) => ({
  type: SET_IS_LOGIN,
  payload,
});

export const setConfirmCodeModalAct = (payload) => ({
  type: SET_CONFIRM_CODE_MODAL_ACT,
  payload,
});

export const setAddVisaCardModalAct = (payload) => ({
  type: SET_ADD_VISA_CARD_MODAL_ACT,
  payload,
});

export const setCartNotificationAct = (payload) => ({
  type: SET_CART_NOTIFICATION_ACT,
  payload,
});

export const setRegisterSuccessModalAct = (payload) => ({
  type: SET_REGISTER_SUCCESS_MODAL_ACT,
  payload,
});

export const FORMAT_MONEY = (string) =>
  string.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
