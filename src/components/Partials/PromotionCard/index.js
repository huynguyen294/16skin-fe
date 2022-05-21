import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import styles from './promotion-card.module.scss';
import { fakeData } from '../../index';

function PromotionCard() {
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'promo-card': promoCard_style,
    'promo-description': promoDescription_style,
    'use-now-btn': useNowBtn_style,
    tooltip: tooltip_style,
    title: title_style,
    reduced: reduced_style,
    details: details_style,
    type: type_style,
    guide: guide_style,
    date: date_style,
    active: active_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(promoCard_style, { [dark_style]: theme })}>
      <div
        className={title_style}
        style={{
          backgroundImage: `url(${fakeData.imageUrls.coupon})`,
        }}
      >
        <h3 className={reduced_style}>15.000 ₫</h3>
        <p className={promoDescription_style}>đơn hàng từ 99.000 ₫</p>
      </div>
      <div className={details_style}>
        <i className="fa-regular fa-circle-exclamation"></i>
        <ul className={tooltip_style}>
          <li>
            <p>Mã</p>
            <p>NEWBIE100</p>
          </li>
          <li>
            <p>Hạn sử dụng</p>
            <p>31/05/22</p>
          </li>
          <li>
            Điều kiện:
            <ul>
              <li>- Giảm 15K cho đơn hàng từ 99K.</li>
              <li>- Áp dụng cho một số sản phẩm trên trang web.</li>
              <li>- Không áp dụng cho 1 số thương hiệu.</li>
              <li>- Mỗi khách hàng được sử dụng tối đa 1 lần.</li>
            </ul>
          </li>
        </ul>
        <button className={useNowBtn_style}>Dùng ngay</button>
        <p className={type_style}>Mã vận chuyển</p>
        <p className={guide_style}>Áp dụng cho tất cả sản phẩm trên website</p>
        <p className={date_style}>HSD: 31/05/22</p>
      </div>
    </div>
  );
}

export default memo(PromotionCard);
