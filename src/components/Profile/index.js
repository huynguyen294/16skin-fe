import clsx from 'clsx';
import React, { memo, useEffect, useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import {
  DirectoryPath,
  constants,
  UserInfo,
  UserAddress,
  UserPromotion,
  UserFavorite,
  UserHistory,
  UserNotification,
  OrderManager,
} from '../index';
import styles from './profile.module.scss';

function Profile({ isNotificationBtn }) {
  const { USER_FUNCTION } = constants;
  const {
    'profile-sub-menu': profileSubMenu_style,
    'user-layout': userLayout_style,
    counter: counter_style,
    profile: profile_style,
    active: active_style,
    info: info_style,
    dark: dark_style,
  } = styles;
  const {
    USER_INFO,
    NOTIFICATION,
    ADDRESS,
    MY_DISCOUNT,
    MY_FAVORITE,
    HISTORY,
    ORDER_MANAGER,
  } = USER_FUNCTION;
  const { UIStore, userStore } = useSelector((state) => state);
  const { theme } = UIStore;
  const { userInfo } = userStore;
  const currFunctionReducer = (state, action) => {
    switch (action) {
      case USER_INFO:
        return (state = USER_INFO);
      case NOTIFICATION:
        return (state = NOTIFICATION);
      case ADDRESS:
        return (state = ADDRESS);
      case MY_DISCOUNT:
        return (state = MY_DISCOUNT);
      case MY_FAVORITE:
        return (state = MY_FAVORITE);
      case HISTORY:
        return (state = HISTORY);
      case ORDER_MANAGER:
        return (state = ORDER_MANAGER);
      default:
        return state;
    }
  };
  const [currFunction, dispatch] = useReducer(currFunctionReducer, USER_INFO);

  const renderSwitch = (param) => {
    switch (param) {
      case USER_INFO:
        return <UserInfo userInfo={userInfo} />;
      case NOTIFICATION:
        return <UserNotification />;
      case ADDRESS:
        return <UserAddress />;
      case MY_DISCOUNT:
        return <UserPromotion />;
      case MY_FAVORITE:
        return <UserFavorite />;
      case HISTORY:
        return <UserHistory />;
      case ORDER_MANAGER:
        return <OrderManager />;
      default:
        return USER_INFO;
    }
  };

  useEffect(() => {
    if (isNotificationBtn) {
      dispatch(NOTIFICATION);
    }
  }, [isNotificationBtn]);

  return (
    <React.Fragment>
      <DirectoryPath />
      <Row className={clsx(profile_style, { [dark_style]: theme })}>
        <Col lg={3}>
          <div className={info_style}>
            <img src={userInfo.avatar} alt="" />
            <div>
              <p>Tài khoảng của</p>
              <h3>{userInfo.name}</h3>
            </div>
          </div>
          <ul className={profileSubMenu_style}>
            <li
              className={clsx({ [active_style]: currFunction === USER_INFO })}
              onClick={() => dispatch(USER_INFO)}
            >
              <i className="fa-solid fa-user"></i>
              <span>Thông tin tài khoảng</span>
            </li>
            <li
              className={clsx({
                [active_style]: currFunction === NOTIFICATION,
              })}
              onClick={() => {
                dispatch(NOTIFICATION);
              }}
            >
              <i className="fa-solid fa-bell"></i>
              <span>Thông báo của tôi</span>
              <span className={counter_style}>5</span>
            </li>
            <li
              className={clsx({
                [active_style]: currFunction === ORDER_MANAGER,
              })}
              onClick={() => {
                dispatch(ORDER_MANAGER);
              }}
            >
              <i className="fa-solid fa-bars-progress"></i>
              <span>Quản lí đơn hàng</span>
            </li>
            <li
              className={clsx({ [active_style]: currFunction === ADDRESS })}
              onClick={() => dispatch(ADDRESS)}
            >
              <i className="fa-solid fa-location-dot"></i>
              <span>Sổ địa chỉ</span>
            </li>
            <li
              className={clsx({ [active_style]: currFunction === MY_DISCOUNT })}
              onClick={() => dispatch(MY_DISCOUNT)}
            >
              <i className="fa-solid fa-badge-percent"></i>
              <span>Mã giảm giá của tôi</span>
            </li>
            <li
              className={clsx({ [active_style]: currFunction === MY_FAVORITE })}
              onClick={() => dispatch(MY_FAVORITE)}
            >
              <i className="fa-solid fa-heart"></i>
              <span>Sản phẩm yêu thích</span>
            </li>
            <li
              className={clsx({ [active_style]: currFunction === HISTORY })}
              onClick={() => dispatch(HISTORY)}
            >
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>Sản phẩm đã xem</span>
            </li>
          </ul>
        </Col>
        <Col lg={9} className={userLayout_style}>
          {renderSwitch(currFunction)}
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default memo(Profile);
