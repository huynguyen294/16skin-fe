import { memo, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Star, actions } from '../../index';
import styles from './product-block.module.scss';

function ProductBlock({ product, list }) {
  const { FORMAT_MONEY } = actions;
  const { theme } = useSelector((state) => state.UIStore);
  const [quality, setQuality] = useState(1);

  const {
    'reduced-price': reducedPrice_style,
    'reduced-percent': reducedPercent_style,
    'product-block': productBlock_style,
    'box-product-detail': boxProductDetail_style,
    'pro-name': proName_style,
    'box-product-add': boxProductAdd_style,
    'add-btn': boxAdd_style,
    'box-quantity': boxQuantity_style,
    'qua-btn': quaBtn_style,
    'qua-input': quaInput_style,
    'pro-price': proPrice_style,
    'evaluate-star': evaluateStar_style,
    evaluate: evaluate_style,
    price: price_style,
    dark: dark_style,
    list: list_style,
  } = styles;

  useLayoutEffect(() => {
    if (quality < 1) {
      setQuality(1);
    }
  }, [quality]);

  return (
    <div
      className={clsx(productBlock_style, {
        [dark_style]: theme,
        [list_style]: list,
      })}
    >
      <Link to={'/details/' + product._id}>
        <img className="product-img" src={product.image} alt="sản phẩm" />
      </Link>
      <div className="product-detail">
        <div className={boxProductDetail_style}>
          <Link to={'/details/' + product._id} className={proName_style}>
            {product.name}
          </Link>
          <div className={evaluate_style}>
            <Star numOfStar={product.star}></Star>
          </div>
          <div className={proPrice_style}>
            <p className={reducedPrice_style}>
              {FORMAT_MONEY('' + product.sale_price)}
              <span>đ</span>
            </p>
            <p className={price_style}>
              {FORMAT_MONEY('' + product.price)}
              <span>đ</span>
            </p>
            <p className={reducedPercent_style}>
              {Math.floor(100 - (product.sale_price / product.price) * 100)}%
            </p>
          </div>
        </div>
      </div>
      <div className={boxProductAdd_style}>
        <div className={boxQuantity_style}>
          <button
            className={clsx(quaBtn_style, 'minus')}
            id="qua-btn-minus"
            onClick={() => setQuality((prev) => prev - 1)}
          >
            -
          </button>
          <input
            className={quaInput_style}
            type="text"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          />
          <button
            className={clsx(quaBtn_style, 'add')}
            id="qua-btn-add"
            onClick={() => setQuality((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <Link to={'/payment'} className={boxAdd_style}>
          <button>Mua ngay</button>
        </Link>
      </div>
    </div>
  );
}

export default memo(ProductBlock);
