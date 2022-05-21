import clsx from 'clsx';
import { memo, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { actions } from '../../index';
import styles from './register-success.module.scss';

function RegisterSuccess({ handleGetAction }) {
  const {
    container: container_style,
    modal: modal_style,
    'modal-title': modalTitle_style,
    'modal-body': modalBody_style,
    'modal-footer': modalFooter_style,
    'confirm-btn': confirmBtn_style,
    dark: dark_style,
  } = styles;

  const { setNavFixed } = actions;
  const { theme, navFixed } = useSelector((state) => state.UIStore);
  const [action, setAction] = useState({
    confirm: false,
  });
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(10);

  useLayoutEffect(() => {
    const timerId = setInterval(() => {
      setCounter((prev) => {
        if (prev > 0) {
          return (prev -= 1);
        } else {
          clearInterval(timerId);
          return prev;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useLayoutEffect(() => {
    if (counter === 0) {
      setAction((prev) => ({ ...prev, confirm: true }));
    }
  }, [counter]);

  useEffect(() => {
    if (navFixed) {
      dispatch(setNavFixed(false));
    }
  }, [navFixed]);

  useEffect(() => {
    handleGetAction(action);
    return () => {
      setAction((prev) => ({
        ...prev,
        close: false,
        cancel: false,
        confirm: false,
      }));
    };
  }, [action]);

  return (
    <div className={clsx(container_style, { [dark_style]: theme })}>
      <div className={modal_style}>
        <div className={modalTitle_style}>
          <h3>Đăng kí thành công</h3>
        </div>
        <hr />
        <div className={modalBody_style}>
          <p>
            <span>Chúc mừng</span> bạn đã trở thành thành viên của{' '}
            <span>16Skin</span>
          </p>
          <p>trang web sẽ tự động chuyển hướng sau {counter}s</p>
        </div>
        <hr />
        <div className={modalFooter_style}>
          <button
            onClick={() => setAction((prev) => ({ ...prev, confirm: true }))}
            className={confirmBtn_style}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(RegisterSuccess);
