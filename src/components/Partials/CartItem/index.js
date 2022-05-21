import clsx from 'clsx';
import { memo, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Checkbox, actions } from '../../index';
import styles from './cart-item.module.scss';

function CartItem({ allChecked, product }) {
  const {FORMAT_MONEY} = actions
  const { theme } = useSelector((state) => state.UIStore);
  const [quality, setQuality] = useState(1);

  const {
    'cart-item': cartItem_style,
    'price-group': priceGroup_style,
    'reduced-price': reducedPrice_style,
    'final-price': finalPrice_style,
    dark: dark_style,
    product: product_style,
    price: price_style,
    qty: qty_style,
  } = styles;

  useLayoutEffect(() => {
    if (quality < 1) {
      setQuality(1);
    }
  }, [quality]);

  return (
    <div className={clsx(cartItem_style, { [dark_style]: theme })}>
      <div className={product_style}>
        <Checkbox checked={allChecked} />
        <img src={product.image} alt="ảnh sản phẩm" />
        <p>
          {product.name}
        </p>
      </div>
      <div className={priceGroup_style}>
        <p className={reducedPrice_style}>{FORMAT_MONEY(''+product.sale_price)} ₫</p>
        <p className={price_style}>{FORMAT_MONEY(''+product.price)} ₫</p>
      </div>
      <div className={qty_style}>
        <button onClick={() => setQuality((prev) => prev - 1)}>-</button>
        <input
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          type="text"
        />
        <button onClick={() => setQuality((prev) => prev + 1)}>+</button>
      </div>
      <p className={finalPrice_style}>{FORMAT_MONEY(''+product.sale_price*quality)} ₫</p>
      <span>
        <i className="fa-light fa-trash-can"></i>
      </span>
    </div>
  );
}

export default memo(CartItem);
