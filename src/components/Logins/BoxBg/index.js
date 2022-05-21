import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';

import styles from './box-bg.module.scss';
import { fakeData } from '../../index';

function BoxBg() {
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'box-bg': boxBg_style,
    'bg-title': bgTitle_style,
    bg: bg_style,
    logo: logo_style,
    'btn-facebook': btnFacebook_style,
    'btn-google': btnGoogle_style,
    'btn-logo': btnLogo_style,
    dark: dark_style,
  } = styles;

  return (
    <Row>
      <div className={clsx(boxBg_style, { [dark_style]: theme })}>
        <div className={bgTitle_style}>
          <img
            className={logo_style}
            src={fakeData.imageUrls.logo}
            alt="logo"
          />
          <h1> Đăng nhập</h1>
        </div>
        <img
          className={bg_style}
          src={fakeData.imageUrls.bg_logo}
          alt="bg logo"
        ></img>
      </div>
    </Row>
  );
}

export default memo(BoxBg);
