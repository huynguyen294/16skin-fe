import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { users } from '../../../fakeData';
import { actions } from '../../index';
import styles from './login-block.module.scss';

function LoginBlock({ isLoginBtn }) {
  const { setIsLogin, setUserInfo, setConfirmCodeModalAct } = actions;
  const { theme } = useSelector((state) => state.UIStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formActive, setFormActive] = useState(isLoginBtn);
  const [userInput, setUserInput] = useState({ username: '', password: '' });

  const {
    'login-form': loginForm_style,
    'register-form': registerForm_style,
    'or-line': orLine_style,
    'login-block': loginBlock_style,
    'login-title': loginTitle_style,
    'login-api': loginApi_style,
    'login-forms': loginForms_style,
    'btn-text': btnText_style,
    'login-title-line': loginTitleLine_style,
    forms: forms_style,
    active: active_style,
    message: message_style,
    btn: btn_style,
    dark: dark_style,
  } = styles;

  const handleFromActive = () => {
    setFormActive(!formActive);
  };

  const handleLogin = () => {
    users.forEach((user) => {
      if (
        user.username === userInput.username &&
        user.password === userInput.password
      ) {
        dispatch(setUserInfo(user));
        dispatch(setIsLogin(true));
        navigate('/', { replace: true });
      }
    });
  };

  // xử lí khi ấn nút đăng nhập, đăng kí khi đang ở trong login page
  useEffect(() => {
    setFormActive(!isLoginBtn);
  }, [isLoginBtn]);

  return (
    <div className={clsx(loginBlock_style, { [dark_style]: theme })}>
      <div className={clsx(loginTitle_style, { [active_style]: formActive })}>
        <button
          onClick={() => {
            if (formActive) setFormActive(false);
          }}
          className={btn_style}
        >
          Đăng nhập
        </button>
        <button
          onClick={() => {
            if (!formActive) setFormActive(true);
          }}
          className={btn_style}
        >
          Đăng kí
        </button>
        <div className={loginTitleLine_style}></div>
      </div>
      <div className={clsx(loginForms_style, { [active_style]: formActive })}>
        <div className={clsx(forms_style, loginForm_style)}>
          <input
            onChange={(e) =>
              setUserInput({ ...userInput, username: e.target.value })
            }
            type="text"
            placeholder="Email/số điện thoại"
          />
          <input
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
            type="password"
            placeholder="Mật khẩu"
          />
          <button onClick={handleLogin}>Đăng nhập</button>
          <a href="/#">Quên mật khẩu?</a>
        </div>
        <div className={clsx(forms_style, registerForm_style)}>
          <h1>
            Chào mừng đến với <span>16Skin</span>
          </h1>
          <input type="text" placeholder="Email/số điện thoại" />
          <button onClick={() => dispatch(setConfirmCodeModalAct(true))}>
            Tiếp theo
          </button>
        </div>
      </div>
      <div className={orLine_style}>
        <hr />
        <span>Hoặc</span>
        <hr />
      </div>
      <div className={loginApi_style}>
        <a href="/#" className={btn_style}>
          <i className="fa fa-facebook" />
          <p className={btnText_style}>Facebook</p>
        </a>
        <a href="/#" className={btn_style}>
          <i className="fa fa-google" />
          <p className={btnText_style}>Google</p>
        </a>
      </div>
      <p className={message_style}>
        {formActive ? 'Bạn đã có tài khoản?' : 'Bạn chưa có tài khoản?'}
        <i onClick={handleFromActive}>
          {formActive ? ' Đăng nhập' : ' Đăng ký'}
        </i>
      </p>
    </div>
  );
}

export default memo(LoginBlock);
