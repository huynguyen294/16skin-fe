import { memo } from 'react';
import { useSelector } from 'react-redux';
import { FooterInfo } from '../index';

import clsx from 'clsx';
import styles from './footer.module.scss';

function Footer() {
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'box-footer-info': boxFooterInfo_style,
    'fo-copyright': foCopyright_style,
    footer: footer_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(footer_style, { [dark_style]: theme })}>
      <div className={boxFooterInfo_style}>
        <FooterInfo />
        <FooterInfo />
        <FooterInfo />
        <FooterInfo />
        <FooterInfo />
      </div>
      <div className={foCopyright_style}>
        <p>made by Hoang Huy</p>
      </div>
    </div>
  );
}

export default memo(Footer);
