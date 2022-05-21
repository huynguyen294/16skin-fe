import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../index';
import styles from './confirm-code.module.scss';

function ConfirmCode({ handleGetAction }) {
  const {
    container: container_style,
    modal: modal_style,
    'modal-title': modalTitle_style,
    'modal-body': modalBody_style,
    'modal-footer': modalFooter_style,
    'cancel-btn': cancelBtn_style,
    'confirm-btn': confirmBtn_style,
    dark: dark_style,
  } = styles;

  const { setNavFixed } = actions;
  const { theme, navFixed } = useSelector((state) => state.UIStore);
  const [action, setAction] = useState({
    close: false,
    cancel: false,
    confirm: false,
  });
  const dispatch = useDispatch();

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
        <i
          onClick={() => setAction((prev) => ({ ...prev, close: true }))}
          className="fa-solid fa-xmark"
        ></i>
        <div className={modalTitle_style}>
          <h3>Xác nhận mã</h3>
          <p>Vui lòng nhập mã xác thực nhận được</p>
        </div>
        <hr />
        <div className={modalBody_style}>
          <input type="text" />
        </div>
        <hr />
        <div className={modalFooter_style}>
          <button
            onClick={() => setAction((prev) => ({ ...prev, cancel: true }))}
            className={cancelBtn_style}
          >
            Hủy bỏ
          </button>
          <button
            onClick={() => setAction((prev) => ({ ...prev, confirm: true }))}
            className={confirmBtn_style}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ConfirmCode);
