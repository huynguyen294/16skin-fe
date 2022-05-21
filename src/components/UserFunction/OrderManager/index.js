import clsx from 'clsx';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { PageController, OrderCard, fakeData } from '../../index';
import styles from './order-manager.module.scss';

function OrderManager() {
  const { products } = fakeData;
  const { theme } = useSelector((state) => state.UIStore);
  const [currStatus, setCurrStatus] = useState('ALL');
  const status = {
    ALL: 'ALL',
    WAIT_PAYMENT: 'WAIT_PAYMENT',
    HANDLING: 'HANDLING',
    WAIT_TRANSPORT: 'WAIT_TRANSPORT',
    DELIVERED: 'DELIVERED',
    CANCALED: 'CANCALED',
  };

  //reduced data
  const reducedProducts = useMemo(() => {
    return products.map((product, idx) => {
      if ((idx + 1) % 3 === 0) {
        return { ...product, type: 'done' };
      } else if ((idx + 1) % 3 === 1) {
        return { ...product, type: 'delivering' };
      } else {
        return { ...product, type: 'cancle' };
      }
    });
  }, [products]);

  const orderProducts = useMemo(() => {
    return reducedProducts.filter((reducedProduct) => {
      if (currStatus === status.ALL) {
        return reducedProduct;
      } else if (currStatus === status.DELIVERED) {
        return reducedProduct.type === 'done';
      } else if (currStatus === status.CANCALED) {
        return reducedProduct.type === 'cancle';
      } else {
        return reducedProduct.type === 'delivering';
      }
    });
  }, [reducedProducts, currStatus]);

  const {
    'order-manager': orderManager_style,
    controller: controller_style,
    'search-bar': searchBar_style,
    'box-order': boxOrder_style,
    title: title_style,
    active: active_style,
    dark: dark_style,
  } = styles;

  const handelGetCurrPage = (currPage) => {
    console.log(currPage);
  };

  return (
    <div className={clsx(orderManager_style, { [dark_style]: theme })}>
      <h3 className={title_style}>Quản lí đơn hàng</h3>
      <ul className={controller_style}>
        <li
          className={clsx({ [active_style]: currStatus === status.ALL })}
          onClick={() => setCurrStatus(status.ALL)}
        >
          Tất cả đơn
        </li>
        <li
          className={clsx({
            [active_style]: currStatus === status.WAIT_PAYMENT,
          })}
          onClick={() => setCurrStatus(status.WAIT_PAYMENT)}
        >
          Chờ thanh toán
        </li>
        <li
          className={clsx({ [active_style]: currStatus === status.HANDLING })}
          onClick={() => setCurrStatus(status.HANDLING)}
        >
          Đang xử lí
        </li>
        <li
          className={clsx({
            [active_style]: currStatus === status.WAIT_TRANSPORT,
          })}
          onClick={() => setCurrStatus(status.WAIT_TRANSPORT)}
        >
          Chờ vận chuyển
        </li>
        <li
          className={clsx({ [active_style]: currStatus === status.DELIVERED })}
          onClick={() => setCurrStatus(status.DELIVERED)}
        >
          Đã giao
        </li>
        <li
          className={clsx({ [active_style]: currStatus === status.CANCALED })}
          onClick={() => setCurrStatus(status.CANCALED)}
        >
          Đã hủy
        </li>
      </ul>
      <div className={searchBar_style}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
        />
        <button>Tìm đơn hàng</button>
      </div>
      <div className={boxOrder_style}>
        {orderProducts.map((orderProduct, idx) => {
          if (idx < 3) {
            return (
              <OrderCard
                key={orderProduct._id}
                product={orderProduct}
                type={orderProduct.type}
              />
            );
          }
        })}
      </div>
      <PageController
        handelGetCurrPage={handelGetCurrPage}
        pages={[1, 2, 3, 4]}
      />
    </div>
  );
}

export default memo(OrderManager);
