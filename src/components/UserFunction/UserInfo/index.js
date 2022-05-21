import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './user-info.module.scss';
import { Radio, actions } from '../../index';

function UserInfo({ userInfo }) {
  const { setUserInfo } = actions;
  const { theme } = useSelector((state) => state.UIStore);
  const dispatch = useDispatch();

  const [currUserInfo, setCurrUserInfo] = useState({});
  const [gender, setGender] = useState('nam');

  const {
    'user-info': userInfo_style,
    'personal-info': personalInfo_style,
    'setting-info': settinginfo_style,
    'block-personal-info': blockPersonalInfo_style,
    'group-line': groupLine_style,
    'input-line': inputLine_style,
    'radio-group': radioGroup_style,
    'first-line': firstLine_style,
    'edit-btn': editBtn_style,
    active: active_style,
    content: content_style,
    dark: dark_style,
  } = styles;

  useEffect(() => {
    setCurrUserInfo((prev) => ({ ...prev, gender }));
  }, [gender]);

  useEffect(() => {
    setCurrUserInfo(userInfo);
  }, [userInfo]);

  const handleGetRadio = (radio) => {
    setGender(radio.name);
  };

  return (
    <Container className={clsx(userInfo_style, { [dark_style]: theme })}>
      <Row>
        <h1>Thông tin tài khoảng</h1>
        <hr />
        <Col lg={6} className={personalInfo_style}>
          <h3>Thông tin cá nhân</h3>
          <div className={blockPersonalInfo_style}>
            <div className={groupLine_style}>
              <img src={currUserInfo.avatar} alt="ảnh đại diện" />
              <i
                className={clsx(editBtn_style, 'fa-light fa-pen-to-square')}
              ></i>
              <div className={firstLine_style}>
                <div className={clsx(groupLine_style, inputLine_style)}>
                  <label htmlFor="user-name">Họ và tên</label>
                  <input
                    id="user-name"
                    value={currUserInfo.name}
                    onChange={(e) =>
                      setCurrUserInfo((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={clsx(groupLine_style, inputLine_style)}>
                  <label htmlFor="user-nickname">Nickname</label>
                  <input
                    id="user-nickname"
                    value={currUserInfo.nick_name}
                    onChange={(e) =>
                      setCurrUserInfo((prev) => ({
                        ...prev,
                        nick_name: e.target.value,
                      }))
                    }
                    placeholder="Nhập nickname"
                  />
                </div>
              </div>
            </div>
            <div className={clsx(groupLine_style)}>
              <label>Ngày sinh</label>
              <input
                value={
                  currUserInfo.day
                    ? currUserInfo.day
                    : currUserInfo.birth_date
                    ? currUserInfo.birth_date.split('/')[0]
                    : ''
                }
                onChange={(e) =>
                  setCurrUserInfo((prev) => ({
                    ...prev,
                    day: e.target.value,
                  }))
                }
              />
              <input
                value={
                  currUserInfo.mouth
                    ? currUserInfo.mouth
                    : currUserInfo.birth_date
                    ? currUserInfo.birth_date.split('/')[1]
                    : ''
                }
                onChange={(e) =>
                  setCurrUserInfo((prev) => ({
                    ...prev,
                    mouth: e.target.value,
                  }))
                }
              />
              <input
                value={
                  currUserInfo.year
                    ? currUserInfo.year
                    : currUserInfo.birth_date
                    ? currUserInfo.birth_date.split('/')[2]
                    : ''
                }
                onChange={(e) =>
                  setCurrUserInfo((prev) => ({
                    ...prev,
                    year: e.target.value,
                  }))
                }
              />
            </div>
            <div className={clsx(groupLine_style)}>
              <label>Giới tính</label>
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
            <button onClick={() => dispatch(setUserInfo(currUserInfo))}>
              Lưu thay đổi
            </button>
          </div>
        </Col>
        <Col lg={6} className={settinginfo_style}>
          <h3>Số điện thoại và email</h3>
          <ul>
            <li className={clsx(groupLine_style, inputLine_style)}>
              <div className={content_style}>
                <i className="fa-light fa-phone"></i>
                <div>
                  <p>Số điện thoại</p>
                  <p>0978520403</p>
                </div>
              </div>
              <button>Cập nhật</button>
            </li>
            <li className={clsx(groupLine_style, inputLine_style)}>
              <div className={content_style}>
                <i className="fa-light fa-envelope"></i>
                <div>
                  <p>Email</p>
                  <p>anhhuy2099@gmail.com</p>
                </div>
              </div>
              <button>Cập nhật</button>
            </li>
          </ul>
          <h3>Bảo mật</h3>
          <ul>
            <li className={clsx(groupLine_style, inputLine_style)}>
              <div className={content_style}>
                <i className="fa-light fa-lock-keyhole"></i>
                <div>
                  <p>Thiết lập mật khẩu</p>
                </div>
              </div>
              <button>Cập nhật</button>
            </li>
          </ul>
          <h3>Liên kết mạng xã hội</h3>
          <ul>
            <li className={clsx(groupLine_style, inputLine_style)}>
              <div className={content_style}>
                <i className="fa-brands fa-facebook"></i>
                <div>
                  <p>Facebook</p>
                </div>
              </div>
              <button className={active_style}>Đã liên kêt</button>
            </li>
            <li className={clsx(groupLine_style, inputLine_style)}>
              <div className={content_style}>
                <i className="fa-brands fa-google"></i>
                <div>
                  <p>Google</p>
                </div>
              </div>
              <button>liên kêt</button>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default memo(UserInfo);
