import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '..';

import clsx from 'clsx';
import { Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import styles from './nav-menu-right.module.scss';

function NavMenuRight({ navFixed }) {
  //khai báo scss module
  const {
    'cart-icon': cartIcon_style,
    'cart-total': cartTotal_style,
    'counter-total': counterTotal_style,
    'menu-cart': menuCart_style,
    'theme-btn': themeBtn_style,
    'profile-sub-menu': profileSubMenu_style,
    'login-sub-menu': loginSubMenu_style,
    'profile-text': profileText_style,
    'arrow-up': arrowUp_style,
    'cart-count': cartCount_style,
    'counter-product': counterProduct_style,
    'fixed-top': fixedTop_style,
    'cart-notification': cartNotification_style,
    'noti-close-btn': notiCloseBtn_style,
    'noti-status': notiStatus_style,
    active: active_style,
    avartar: avartar_style,
    menu: menu_style,
    profile: profile_style,
    right: right_style,
    dark: dark_style,
  } = styles;

  //khai báo action
  const {
    setTheme,
    setIsLoginBtn,
    setIsLogin,
    setIsNotificationBtn,
    setCartNotificationAct,
  } = actions;

  //khai báo hook
  const { UIStore, userStore } = useSelector((state) => state);
  const { theme, cartNotificationAct } = UIStore;
  const { isLogin, userInfo } = userStore;
  const [subMenuAct, setSubMenuAct] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // xử lí ấn nút đổi theme
  const handleChangeTheme = () => {
    if (theme) {
      dispatch(setTheme(false));
    } else {
      dispatch(setTheme(true));
    }
  };

  //xử lí đăng xuất
  const handleLogout = () => {
    dispatch(setIsLogin(false));
    setSubMenuAct(false);
    navigate('/login', { replace: true });
  };

  //xử lí khi nhấn nút notification
  const handleRenderNotification = () => {
    dispatch(setIsNotificationBtn(true));
    setSubMenuAct(false);
  };

  // xử lí reset submenu active
  useEffect(() => {
    if (navFixed) {
      setSubMenuAct(false);
    }
  }, [navFixed]);

  return (
    <Col
      lg="5"
      className={clsx(menu_style, right_style, {
        [dark_style]: theme,
        [fixedTop_style]: navFixed,
      })}
    >
      <div className={clsx(profile_style, { [active_style]: subMenuAct })}>
        <div className={profileText_style}>
          <p>Tài khoản</p>
          {isLogin ? <p>Đăng xuất</p> : <p>Đăng nhập</p>}
        </div>
        <div className={avartar_style}>
          {isLogin ? (
            <img
              onClick={() => {
                setSubMenuAct(!subMenuAct);
              }}
              src={userInfo.avatar}
              alt=""
            />
          ) : (
            <i
              onClick={() => {
                setSubMenuAct(!subMenuAct);
              }}
              className="fa fa-user"
            ></i>
          )}
        </div>
        {isLogin ? (
          <ul className={profileSubMenu_style}>
            <div className={arrowUp_style}></div>
            <li>
              <Link
                onClick={() => {
                  setSubMenuAct(false);
                }}
                to="/my-blog"
              >
                <p>Trang cá nhân</p>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                onClick={() => {
                  setSubMenuAct(false);
                }}
                to="/profile"
              >
                <p>Tài khoản của tôi</p>
              </Link>
            </li>
            <li>
              <Link onClick={handleRenderNotification} to="/profile">
                <p>
                  Thông báo <span>5</span>
                </p>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                onClick={() => {
                  setSubMenuAct(false);
                }}
                to="/read-blog"
              >
                <p>Blogs</p>
              </Link>
            </li>
            <hr />
            <li>
              <Link to={'/guide'}>
                <p>Giới thiệu trang web</p>
              </Link>
            </li>
            <li>
              <a onClick={handleLogout}>
                <p>Đăng xuất</p>
              </a>
            </li>
          </ul>
        ) : (
          <ul className={loginSubMenu_style}>
            <div className={arrowUp_style}></div>
            <li>
              <Link
                onClick={() => {
                  dispatch(setIsLoginBtn(true));
                  setSubMenuAct(false);
                }}
                to="/login"
              >
                <span>Đăng nhập</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  dispatch(setIsLoginBtn(false));
                  setSubMenuAct(false);
                }}
                to="/register"
              >
                <span>Đăng kí</span>
              </Link>
            </li>
            <li>
              <Link to="/read-blog">
                <span>Đọc blogs</span>
              </Link>
            </li>
            <li>
              <Link to="/guide">
                <span>Giới thiệu trang web</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className={menuCart_style}>
        <Link to="/cart" className={cartIcon_style}>
          <i id="scrollToCard" className="fa fal fa-cart-shopping-fast"></i>
          <span className={cartCount_style}>3</span>
        </Link>
        <div
          className={clsx(cartNotification_style, {
            [active_style]: cartNotificationAct,
          })}
        >
          <div className={arrowUp_style}></div>
          <i
            onClick={() => dispatch(setCartNotificationAct(false))}
            className={clsx(notiCloseBtn_style, 'fa-solid fa-xmark')}
          ></i>
          <p className={notiStatus_style}>
            <i className="fa-solid fa-circle-check"></i>
            <span>Thêm vào giỏ hàng thành công</span>
          </p>
          <Link
            onClick={() => dispatch(setCartNotificationAct(false))}
            to={'/cart'}
          >
            Xem giỏ hàng và thanh toán
          </Link>
        </div>
        <div className={cartTotal_style}>
          <Link to="/cart" id={counterTotal_style}>
            200.000đ
          </Link>
          <span id={counterProduct_style}>2 sản phẩm</span>
        </div>
        <button className={themeBtn_style} onClick={handleChangeTheme}>
          <i
            className={`fa fa-light ${theme ? 'fa-brightness' : 'fa-moon'}`}
            alt="icon"
          ></i>
        </button>
      </div>
    </Col>
  );
}

export default memo(NavMenuRight);
