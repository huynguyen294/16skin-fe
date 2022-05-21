import clsx from 'clsx';
import React, { memo } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { fakeData, actions, DirectoryPath } from '../../index';
import styles from './delivery-detail.module.scss';

function DeliveryDetail() {
  const { tickerPaths, transporterPaths, products } = fakeData;
  const { FORMAT_MONEY } = actions;
  const { userStore, UIStore } = useSelector((state) => state);
  const { theme } = UIStore;
  const { userInfo } = userStore;
  const {
    'delivery-detail': deliveryDetail_style,
    'delivery-main': deliveryMain_style,
    'delivery-title': deliveryTitle_style,
    'delivery-box': deliveryBox_style,
    'delivery-timeline': deliveryTimeline_style,
    'delivery-time': deliveryTime_style,
    'delivery-content': deliveryContent_style,
    'delivery-head': deliveryHead_style,
    'delivery-description': deliveryDescription_style,
    'delivery-info': deliveryInfo_style,
    'delivery-transporter': deliveryTransporter_style,
    'transporter-name': transporterName_style,
    'tracking-number': trackingNumber_style,
    'delivery-receiver': deliveryReceiver_style,
    'receiver-name': receiverName_style,
    'receiver-address': receiverAddress_style,
    'delivery-order': deliveryOrder_style,
    'delivery-product': deliveryProduct_style,
    'order-product': orderProduct_style,
    'product-name': productName_style,
    'product-price': productPrice_style,
    'product-qty': productQty_style,
    'delivery-status': deliveryStatus_style,
    'help-btn': helpBtn_style,
    dot: dot_style,
    active: active_style,
    dark: dark_style,
  } = styles;
  return (
    <React.Fragment>
      <DirectoryPath />
      <Row className={clsx(deliveryDetail_style, { [dark_style]: theme })}>
        <Col lg={7} className={deliveryMain_style}>
          <div className={deliveryTitle_style}>
            <div>
              <h5>Đang vận chuyển từ Hồ Chí Minh!</h5>
              <p>Ngày giao dực kiến là</p>
              <h3>16/05 - 06/06</h3>
            </div>
            <img src={tickerPaths[4]} alt="ticker" />
          </div>
          <div className={deliveryBox_style}>
            <ul className={deliveryTimeline_style}>
              <li>
                <div className={deliveryTime_style}>
                  <p>16/06</p>
                  <p>21:00</p>
                </div>
                <div className={clsx(deliveryContent_style, active_style)}>
                  <div className={dot_style}></div>
                  <h3 className={deliveryHead_style}>Đến trạm giao hàng</h3>
                  <p className={deliveryDescription_style}>
                    Kiện hàng của bạn đã đã đến trạm giao hàng (Quận 7)
                  </p>
                </div>
              </li>
              <li>
                <div className={deliveryTime_style}>
                  <p>11/05</p>
                  <p>8:00</p>
                </div>
                <div className={deliveryContent_style}>
                  <div className={dot_style}></div>
                  <h3 className={deliveryHead_style}>Đến trạm trung chuyển</h3>
                  <p className={deliveryDescription_style}>
                    Kiện hàng của bạn đã đến trạm trung chuyển (quận Gò Vấp)
                  </p>
                </div>
              </li>
              <li>
                <div className={deliveryTime_style}>
                  <p>09/05</p>
                  <p>18:36</p>
                </div>
                <div className={deliveryContent_style}>
                  <div className={dot_style}></div>
                  <h3 className={deliveryHead_style}>
                    Đã rời khỏi trung tâm trung chuyển
                  </h3>
                  <p className={deliveryDescription_style}>
                    Kiện hàng của bạn đã rời khỏi trung tâm trung chuyển
                  </p>
                </div>
              </li>
              <li>
                <div className={deliveryTime_style}>
                  <p>09/05</p>
                  <p>13:44</p>
                </div>
                <div className={deliveryContent_style}>
                  <div className={dot_style}></div>
                  <h3 className={deliveryHead_style}>Hoàn tất đóng gói</h3>
                  <p className={deliveryDescription_style}>
                    Kiện hàng của bạn đã hoàn tất đóng gói và sẵn sàn giao cho
                    đơn vị vận chuyển.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={5} className={deliveryInfo_style}>
          <div className={deliveryTransporter_style}>
            <div className={transporterName_style}>
              <img src={transporterPaths[0]} alt="avartar" />
              <div>
                <p>Đơn vị vận chuyển:</p>
                <p>Giao hàng tiết kiệm</p>
              </div>
            </div>
            <hr />
            <p className={trackingNumber_style}>
              Tracking Number: GHTK34987328 <i className="fa-light fa-copy"></i>
            </p>
          </div>
          <div className={deliveryReceiver_style}>
            <i className="fa-light fa-address-card"></i>
            <div>
              <p className={receiverName_style}>Nguời nhận: {userInfo.name}</p>
              <p className={receiverAddress_style}>{userInfo.address}</p>
            </div>
          </div>
          <div className={deliveryOrder_style}>
            <p>Order 34343403490</p>
            <div className={deliveryProduct_style}>
              <img src={products[5].image} alt="ảnh sản phẩm" />
              <div className={orderProduct_style}>
                <p className={productName_style}>{products[5].name}</p>
                <p className={productPrice_style}>
                  {FORMAT_MONEY('' + products[5].price)} đ
                </p>
                <p className={productQty_style}>x1</p>
              </div>
              <p className={deliveryStatus_style}>Đang vận chuyển</p>
            </div>
          </div>
          <button className={helpBtn_style}>
            <i className="fa-light fa-comments-question"></i> Bạn cần trợ giúp?
          </button>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default memo(DeliveryDetail);
