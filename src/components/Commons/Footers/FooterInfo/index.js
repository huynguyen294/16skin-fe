import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import styles from './footer-infor.module.scss';

function FooterInfo() {
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'footer-info': footerInfo_style,
    'fo-info-list': foInfoList_style,
    'fo-info-title': foInfoTitle_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(footerInfo_style, { [dark_style]: theme })}>
      <h3 className={foInfoTitle_style}>Về chúng tôi</h3>
      <ul className={foInfoList_style}>
        <li>
          <a href="/#">
            <span>- </span>
            <span>Giới thiệu</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span>- </span>
            <span>Cẩm nang mua sắm</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span>- </span>
            <span>Thông tin Hội skincare</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span>- </span>
            <span>Liên hệ</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default memo(FooterInfo);
