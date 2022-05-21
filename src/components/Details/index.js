import React, { memo, useLayoutEffect, useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './details.module.scss';
import {
  actions,
  ProductSlider,
  ProductDescription,
  DirectoryPath,
  Star,
  BoxEvalueteCard,
  fakeData,
} from '../index';
import { sameProduct, products } from '../../fakeData';

function Details() {
  const { FORMAT_MONEY, setCartNotificationAct } = actions;
  const { product_id } = useParams();
  const { theme } = useSelector((state) => state.UIStore);
  const dispatch = useDispatch();
  const [quality, setQuality] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const currProduct = useMemo(() => {
    return products.find((product) => product._id === Number(product_id));
  }, [product_id]);

  const [currImg, setCurrImg] = useState(currProduct.image);
  const productImgs = useMemo(() => {
    return [currProduct.image, ...currProduct.description_images];
  }, [currProduct]);

  const {
    'box-quantity': boxQuantity_style,
    'qua-btn': quaBtn_style,
    'qua-input': quaInput_style,
    'box-pro-images': boxProImages_style,
    'desc-images': descImages_style,
    'box-pro-info': boxProInfo_style,
    'box-review': boxReview_style,
    'review-star': reviewStar_style,
    'review-number': reviewNumber_style,
    'pro-sold': proSold_style,
    'box-prices': boxPrices_style,
    'reduced-price': reducedPrice_style,
    'reduced-percent': reducedPercent_style,
    'add-to-cart': addToCart_style,
    'pay-now': payNow_style,
    'add-to-favorite': addToFavorite_style,
    'same-products': sameProducts_style,
    share: share_style,
    active: active_style,
    details: details_style,
    price: price_style,
    scroll: scroll_style,
    dark: dark_style,
  } = styles;

  useLayoutEffect(() => {
    if (quality < 1) {
      setQuality(1);
    }
  }, [quality]);

  return (
    <React.Fragment>
      <DirectoryPath />
      <Row className={clsx(details_style, { [dark_style]: theme })}>
        <div id={scroll_style}></div>
        <Col lg={4} className={boxProImages_style}>
          <img src={currImg} alt="anh san pham" />
          <div className={descImages_style}>
            {productImgs.map((proImg, idx) => (
              <img
                key={idx}
                className={clsx({
                  [active_style]: proImg === currImg,
                })}
                onClick={() => setCurrImg(proImg)}
                src={proImg}
                alt="product image"
              ></img>
            ))}
          </div>
        </Col>
        <Col lg={8} className={boxProInfo_style}>
          <h1>{currProduct.name}</h1>
          <div className={boxReview_style}>
            <Star numOfStar={currProduct.star}></Star>
            <a href="/#" className={reviewNumber_style}>
              <span>{currProduct.review}</span> Đánh giá
            </a>
            <a href="/#" className={proSold_style}>
              <span>{currProduct.sold}</span> Đã bán
            </a>
          </div>
          <hr />
          <div className={boxPrices_style}>
            <h3 className={reducedPrice_style}>
              {FORMAT_MONEY('' + currProduct.sale_price)}
              <span>đ</span>
            </h3>
            <h3 className={price_style}>
              {FORMAT_MONEY('' + currProduct.price)}
              <span>đ</span>
            </h3>
            <p className={reducedPercent_style}>
              {Math.floor(
                100 - (currProduct.sale_price / currProduct.price) * 100
              )}
              %
            </p>
          </div>
          <hr />
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
          <a href={'#' + scroll_style}>
            <button
              onClick={() => dispatch(setCartNotificationAct(true))}
              className={addToCart_style}
            >
              <i className="fa-light fa-cart-circle-plus"></i> Thêm vào giỏ hàng
            </button>
          </a>
          <Link to="/payment">
            <button className={payNow_style}>Mua ngay</button>
          </Link>
          <div className={share_style}>
            <p>Chia sẻ:</p>
            <img src={fakeData.imageUrls.facebookLogo} alt="facebook" />
            <img src={fakeData.imageUrls.messLogo} alt="messenger" />
            <img src={fakeData.imageUrls.tiktokLogo} alt="tiktok" />
          </div>
          <div className={addToFavorite_style}>
            {favorite ? (
              <i
                onClick={() => setFavorite(!favorite)}
                className="fa fas fa-heart"
              ></i>
            ) : (
              <i
                onClick={() => setFavorite(!favorite)}
                className="fa fal fa-heart"
              ></i>
            )}
            <h3>Thêm vào yêu thích</h3>
          </div>
        </Col>
      </Row>
      {/* mô tả */}
      <Row>
        <ProductDescription />
      </Row>
      {/* đánh giá */}
      <Row>
        <BoxEvalueteCard />
      </Row>
      {/* sản phẩm tương tự */}
      <Row className={sameProducts_style}>
        <ProductSlider
          productIds={sameProduct.productIds}
          collection_name={'Sản phẩm tương tự'}
          collectionSlug={sameProduct.slug}
        ></ProductSlider>
      </Row>
    </React.Fragment>
  );
}

export default memo(Details);
