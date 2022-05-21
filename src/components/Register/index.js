import clsx from 'clsx';
import { memo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './register.module.scss';
import { fakeData, Radio, actions } from '../index';

function Register() {
  const {
    register: register_style,
    title: title_style,
    sheet: sheet_style,
    'form-group': formGroup_style,
    'radio-group': radioGroup_style,
    'box-radio': boxRadio_style,
    'in-line': inLine_style,
    gender: gender_style,
    left: left_style,
    right: right_style,
    dark: dark_style,
  } = styles;

  const { setRegisterSuccessModalAct } = actions;
  const { theme } = useSelector((state) => state.UIStore);
  const dispatch = useDispatch();
  const [gender, setGender] = useState('');

  //xử lí radio
  const handleGetRadio = (radio) => {
    setGender(radio.name);
  };

  //xử lí đăng kí
  const handleRegister = () => {
    dispatch(setRegisterSuccessModalAct(true));
  };

  return (
    <div className={clsx(register_style, { [dark_style]: theme })}>
      <Row>
        <h1 className={title_style}>Đăng kí tài khoản</h1>
        <Col lg={7} className={clsx(sheet_style, left_style)}>
          <div className={clsx(formGroup_style, inLine_style)}>
            <div className={formGroup_style}>
              <label htmlFor="name">Họ và tên</label>
              <input type="text" id="name" />
            </div>
            <div className={formGroup_style}>
              <label htmlFor="birth-date">Ngày sinh</label>
              <input type="date" id="birth-date" />
            </div>
          </div>

          <div className={formGroup_style}>
            <label htmlFor="pass">Mật khẩu</label>
            <input type="password" id="pass" />
          </div>
          <div className={formGroup_style}>
            <label htmlFor="comfirm-pass">Xác nhận mật khẩu</label>
            <input type="password" id="comfirm-pass" />
          </div>
          <div className={clsx(formGroup_style, gender_style)}>
            <label htmlFor="gender">Giới tính: </label>
            <div className={boxRadio_style}>
              <div className={radioGroup_style}>
                <Radio
                  getRadio={handleGetRadio}
                  name={'nam'}
                  active={gender === 'nam'}
                />
                <span>Nam</span>
              </div>
              <div className={radioGroup_style}>
                <Radio
                  getRadio={handleGetRadio}
                  name={'nu'}
                  active={gender === 'nu'}
                />
                <span>Nữ</span>
              </div>
              <div className={radioGroup_style}>
                <Radio
                  getRadio={handleGetRadio}
                  name={'khac'}
                  active={gender === 'khac'}
                />
                <span>Khác</span>
              </div>
            </div>
          </div>
          <button onClick={handleRegister}>Đăng kí</button>
        </Col>
        <Col lg={5} className={clsx(sheet_style, right_style)}>
          <h1>
            <span>16Skin</span> xin chào
          </h1>
          <img src={fakeData.tickerPaths[5]} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default memo(Register);
