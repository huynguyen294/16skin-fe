import clsx from 'clsx';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SelectAddress, Radio, fakeData, actions } from '../index';
import styles from './payment.module.scss';

function Payment() {
  const { users, paymentMethods, products } = fakeData;
  const { FORMAT_MONEY, setAddVisaCardModalAct } = actions;
  const { theme } = useSelector((state) => state.UIStore);
  const { isLogin } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  const oderProducts = useMemo(() => products.slice(0, 2));
  const addresses = users[0].addresses;
  const [currAddress, setCurrAddress] = useState(users[0].addresses[0]);
  const [currActiveRadio, setCurrActiveRadio] = useState();
  const [localAtm, setLocalAtm] = useState(false);

  const {
    'delivery-info': deliveryInfo_style,
    payment: payment_style,
    address: address_style,
    'payment-methods': paymentMethods_style,
    'oder-info': oderInfo_style,
    'discount-code': discountCode_style,
    'pmm-footer': pmmFooter_style,
    'total-line': totalLine_style,
    'oder-btn': oderBtn_style,
    'curr-price': currPrice_style,
    'final-price': finalPrice_style,
    'add-card-btn': addCardBtn_stlye,
    'box-avaiable-card': boxAvaiableCard_style,
    'box-avaiable-card-title': boxAvaiableCardTitle_style,
    'avaiable-card': avaiableCard_style,
    'bank-avatar': bankAvatar_style,
    'card-info': cardInfo_style,
    'bank-name': bankName_style,
    'card-number': cardNumber_style,
    'local-card-method': localCardMethod_style,
    product: product_style,
    active: active_style,
    dark: dark_style,
  } = styles;

  // xử lí update địa chỉ trong select
  const handleGetAddressOption = (option) => {
    setCurrAddress(option);
  };

  // xử lí radio phương thức thanh toán
  const handelGetCurrRadio = (radio) => {
    setCurrActiveRadio(radio.name);
  };

  //xử lí hoàn tất đơn hàng
  const handleDoneOrder = () => {};

  //xử lí khi người dùng không đăng nhập và ko có sẵn curraddress
  useEffect(() => {
    if (!isLogin) {
      setCurrAddress({ name: '', sdt: '', address: '' });
    }
  }, [isLogin]);

  //xử lí khi radio chọn thanh toán bằng ATM nội địa
  const handleAddcard = () => {
    dispatch(setAddVisaCardModalAct(true));
  };

  useEffect(() => {
    if (currActiveRadio === 6) {
      setLocalAtm(true);
    } else {
      setLocalAtm(false);
    }
  }, [currActiveRadio]);

  return (
    <React.Fragment>
      <Row className={clsx(payment_style, { [dark_style]: theme })}>
        <h3>Thông tin giao hàng</h3>
        <Col lg={7} className={deliveryInfo_style}>
          <div className={address_style}>
            {isLogin ? (
              <SelectAddress
                handleGetOptionIdx={handleGetAddressOption}
                lable={'Chọn địa chỉ'}
                options={addresses}
              />
            ) : (
              ''
            )}
            <input
              type="text"
              value={currAddress.name}
              onChange={(e) =>
                setCurrAddress({ ...currAddress, name: e.target.value })
              }
              placeholder="Họ và tên"
            />
            <input
              type="text"
              value={currAddress.sdt}
              onChange={(e) =>
                setCurrAddress({ ...currAddress, sdt: e.target.value })
              }
              placeholder="Số điện thoại"
            />
            <input
              type="text"
              value={currAddress.address}
              onChange={(e) =>
                setCurrAddress({ ...currAddress, address: e.target.value })
              }
              placeholder="Địa chỉ"
            />
          </div>
          <h3>Phương thức thanh toán</h3>
          <div className={paymentMethods_style}>
            <ul>
              {paymentMethods.map((pmMethod) => {
                return (
                  <li
                    onClick={() => setCurrActiveRadio(pmMethod._id)}
                    key={pmMethod._id}
                  >
                    <Radio
                      getRadio={handelGetCurrRadio}
                      name={pmMethod._id}
                      active={pmMethod._id === currActiveRadio}
                    ></Radio>
                    <img src={pmMethod.image} alt="ảnh ví" />
                    <p>{pmMethod.name}</p>
                  </li>
                );
              })}
              {localAtm ? (
                <div className={localCardMethod_style}>
                  <button onClick={handleAddcard} className={addCardBtn_stlye}>
                    <i className="fa-solid fa-plus"></i> Thêm thẻ
                  </button>
                  {isLogin ? (
                    <React.Fragment>
                      <p className={boxAvaiableCardTitle_style}>
                        Chọn thẻ có sẵn
                      </p>
                      <div className={boxAvaiableCard_style}>
                        <div className={clsx(avaiableCard_style, active_style)}>
                          <img
                            src={fakeData.imageUrls.vcbLogo}
                            alt="bank avatar"
                            className={bankAvatar_style}
                          />
                          <div className={cardInfo_style}>
                            <p className={bankName_style}>Vietcombank</p>
                            <p className={cardNumber_style}>
                              **** **** **** 1234
                            </p>
                          </div>
                        </div>
                        <div className={avaiableCard_style}>
                          <img
                            src={fakeData.imageUrls.abcLogo}
                            alt="bank avatar"
                            className={bankAvatar_style}
                          />
                          <div className={cardInfo_style}>
                            <p className={bankName_style}>ACB</p>
                            <p className={cardNumber_style}>
                              **** **** **** 1234
                            </p>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}
            </ul>
            <hr />
            <div className={pmmFooter_style}>
              <Link to={'/cart'}>Quay về giỏ hàng</Link>
              <button onClick={handleDoneOrder} className={oderBtn_style}>
                Hoàn tất đơn hàng
              </button>
            </div>
          </div>
        </Col>
        <Col lg={5} className={oderInfo_style}>
          {oderProducts.map((oderProduct) => (
            <div key={oderProduct._id} className={product_style}>
              <img src={oderProduct.image} alt="ảnh sản phẩm" />
              <p>{oderProduct.name}</p>
              <p>{FORMAT_MONEY('' + oderProduct.price)}₫</p>
              <span>{oderProduct._id + 2}</span>
            </div>
          ))}
          <hr />
          <div className={discountCode_style}>
            <input type="text" placeholder="Mã giảm giá" />
            <button>Sử dụng</button>
          </div>
          <hr />
          <div className={totalLine_style}>
            <p>Tạm tính</p>
            <p id={currPrice_style}>51,000₫</p>
          </div>
          <div className={totalLine_style}>
            <p>Phí vận chuyển</p>
            <p>21,000₫</p>
          </div>
          <hr />
          <div className={totalLine_style}>
            <p>Tổng cộng</p>
            <p id={finalPrice_style}>72,000₫</p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default memo(Payment);
