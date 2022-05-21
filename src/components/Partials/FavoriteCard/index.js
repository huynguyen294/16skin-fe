import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { actions, Star } from '../../index';
import styles from './favorite-card.module.scss';

function FavoriteCard({ product }) {
  const {
    'favorite-card': favoriteCard_style,
    'delete-btn': deleteBtn_style,
    product: product_style,
    description: description_style,
    name: name_style,
    price: price_style,
    dark: dark_style,
  } = styles;

  const { theme } = useSelector((state) => state.UIStore);
  const { FORMAT_MONEY } = actions;
  return (
    <div className={clsx(favoriteCard_style, { [dark_style]: theme })}>
      <div className={product_style}>
        <img src={product.image} alt="anh san pham" />
        <div className={description_style}>
          <p className={name_style}>{product.name}</p>
          <div>
            <Star numOfStar={product.star}></Star>
            <span>({product.review})</span>
          </div>
        </div>
      </div>
      <div className={price_style}>
        <p>{FORMAT_MONEY('' + product.sale_price)} ₫</p>
        <div>
          <p>{FORMAT_MONEY('' + product.price)} ₫</p>
          <span>
            {100 - Math.floor((product.sale_price / product.price) * 100)}%
          </span>
        </div>
      </div>
      <i className={clsx(deleteBtn_style, 'fa-solid fa-xmark')}></i>
    </div>
  );
}

export default memo(FavoriteCard);
