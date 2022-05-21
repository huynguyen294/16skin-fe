import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { actions } from '../../index';
import styles from './order-card.module.scss';

function OderCard({ type, product }) {
  const { FORMAT_MONEY } = actions;
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'order-card': orderCard_style,
    'order-status': orderStatus_style,
    'order-body': orderBody_style,
    'order-footer': orderFooter_style,
    'status-last': statusLast_style,
    buttons: buttons_style,
    product: product_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(orderCard_style, { [dark_style]: theme })}>
      <div className={orderStatus_style}>
        <i
          className={clsx({
            ['fa-light fa-jet-fighter']: type === 'delivering',
            ['fa-light fa-clipboard-check']: type === 'done',
            ['fa-light fa-ban']: type === 'cancle',
          })}
        ></i>
        {type === 'delivering' ? (
          <Link to="/delivering">
            <div>
              <p> 10/5 - Kiện hàng của bạn đã đến trung tâm trung chuyển</p>
              <p>Dự kiến giao: 17/5 - 18/5</p>
            </div>
            <i
              className={clsx(statusLast_style, 'fa-solid fa-angle-right')}
            ></i>
          </Link>
        ) : (
          ''
        )}
        {type === 'done' ? <p>Đã giao</p> : ''}
        {type === 'cancle' ? <p>Đã hủy</p> : ''}
      </div>
      <hr />
      <div className={orderBody_style}>
        <div className={product_style}>
          <div>
            <span>x1</span>
            <img src={product.image} alt="anh san pham" />
            <p>{product.name}</p>
          </div>
          <p>{FORMAT_MONEY('' + product.price)} ₫</p>
        </div>
      </div>
      <hr />
      <div className={orderFooter_style}>
        <p>
          <span>Tổng tiền:</span> {FORMAT_MONEY(product.price + 25000 + '')} ₫
        </p>
        {type === 'delivering' ? (
          ''
        ) : (
          <div className={buttons_style}>
            <button>Mua lại</button>
            <button>Xem chi tiết</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(OderCard);
