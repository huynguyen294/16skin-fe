import clsx from 'clsx';
import { memo, useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Checkbox, CartItem, fakeData } from '../index';
import styles from './cart.module.scss';

function Cart() {
  const {products}=fakeData
  const { theme } = useSelector((state) => state.UIStore);
  const { isLogin } = useSelector((state) => state.userStore);
  const cartProducts = useMemo(()=>products.slice(10, 13), [products])
  const [allChecked, setAllChecked] = useState(false);

  const {
    'oder-final-price': oderFinalPrice_style,
    'cart-control': cartControl_style,
    'checkbox-count': checkboxCount_style,
    'main-cart': mainCart_style,
    'address-control': addressControl_style,
    'user-address': userAddress_style,
    'address-title': addressTitle_style,
    'address-body': addressBody_style,
    'oder-control': oderControl_style,
    'oder-body': oderBody_style,
    'arrow-up': arrowUp_style,
    tooltip: tooltip_style,
    message: message_style,
    counter: counter_style,
    cart: cart_style,
    dark: dark_style,
    'oder-title': oderTitle_style,
  } = styles;

  return (
    <Row className={clsx(cart_style, { [dark_style]: theme })}>
      <h1>Giỏ hàng</h1>
      <Col lg={9}>
        <div className={cartControl_style}>
          <div
            onClick={() => setAllChecked(!allChecked)}
            className={checkboxCount_style}
          >
            <Checkbox lable={'Tất cả'} checked={allChecked} />
            <p className={counter_style}>(1 sản phẩm)</p>
          </div>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
          <span>
            <i className="fa-light fa-trash-can"></i>
            <div className={tooltip_style}>
              <div className={arrowUp_style}></div>Xóa sản phẩm được chọn
            </div>
          </span>
        </div>
        <div className={mainCart_style}>
          {
            cartProducts.map((cartProduct)=>(
              <CartItem key={cartProduct._id} product={cartProduct} allChecked={allChecked} />
            ))
          }
        </div>
      </Col>
      <Col lg={3}>
        {isLogin ? (
          <div className={addressControl_style}>
            <div className={addressTitle_style}>
              <p>Giao tới</p>
              <Link to="/change-address">Thay đổi</Link>
            </div>
            <div className={userAddress_style}>
              <p>Nguyễn Hoàng Huy</p>
              <p>0978520403</p>
            </div>
            <p className={addressBody_style}>
              số 99 đường nguyễn văn linh, Xã Trường Đông, Huyện Hòa Thành, Tây
              Ninh
            </p>
          </div>
        ) : (
          ''
        )}
        <div className={oderControl_style}>
          <p className={oderTitle_style}>Thông tin đơn hàng</p>
          <hr />
          <div className={oderBody_style}>
            <p>Tổng tiền</p>
            <p className={oderFinalPrice_style}>0đ</p>
          </div>
          <hr />
          <p className={message_style}>
            Bạn có thể nhập mã giảm giá ở trang thanh toán
          </p>
          <Link to="/payment">
            <button>Thanh toán</button>
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default memo(Cart);
