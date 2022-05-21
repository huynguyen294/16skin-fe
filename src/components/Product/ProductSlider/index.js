import { memo, useLayoutEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { ProductBlock } from '../index';
import { products } from '../../../fakeData';
import styles from './product-slider.module.scss';

function ProductSlider({ collection_name, productIds, collectionSlug }) {
  const { theme } = useSelector((state) => state.UIStore);

  const activeLenght = 4;
  const [currActive, setCurrActive] = useState(0);
  const currProducts = useMemo(() => {
    return products.filter((product) =>
      productIds
        .find((pId) => pId.page === 1)
        .ids.find((id) => id === product._id)
    );
  }, [productIds]);

  const {
    'box-pro-list': boxProList_style,
    'box-pro-slider': boxProSlider_style,
    'pro-cat-title': proCatTitle_style,
    'product-slider': productSlider_style,
    'btn-pro-slide': btnProSlide_style,
    'see-more-btn': seeMoreBtn_style,
    'pro-list': proList_style,
    'box-pro-btn': boxProBtn_style,
    left: left_style,
    right: right_style,
    dark: dark_style,
  } = styles;

  const handleLeft = () => {
    setCurrActive((prev) => prev - 1);
  };

  const handleRight = () => {
    setCurrActive((prev) => prev + 1);
  };

  useLayoutEffect(() => {
    if (currActive < 0) {
      setCurrActive(0);
    } else if (currActive > currProducts.length - activeLenght) {
      setCurrActive(currProducts.length - activeLenght + 1);
      setCurrActive(currProducts.length - activeLenght);
    }
  }, [currActive, currProducts.length]);

  return (
    <Row>
      <div className={clsx(productSlider_style, { [dark_style]: theme })}>
        <h1 className={proCatTitle_style}>{collection_name}</h1>
        <Link
          to={'/collections/' + collectionSlug}
          className={seeMoreBtn_style}
        >
          Xem thêm
        </Link>
        <div className={boxProSlider_style}>
          <div className={boxProBtn_style}>
            <div className={clsx(btnProSlide_style, left_style)}>
              {currActive ? (
                <button onClick={handleLeft}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              ) : (
                ''
              )}
            </div>
            <div className={clsx(btnProSlide_style, right_style)}>
              {currActive === currProducts.length - activeLenght ? (
                ''
              ) : (
                <button onClick={handleRight}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              )}
            </div>
            <div className={boxProList_style}>
              <div
                className={proList_style}
                style={{
                  transform: `translateX(calc((-${currActive}*(100%/${currProducts.length})-20px))`,
                  transition: 'transform .3s ease-in-out',
                }}
              >
                {currProducts.map((product) => {
                  return <ProductBlock product={product} key={product._id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
}

export default memo(ProductSlider);
