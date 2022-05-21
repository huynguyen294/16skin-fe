import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import styles from './slogan.module.scss';

function Slogan() {
  const { theme } = useSelector((state) => state.UIStore);

  const { 'box-slogan': boxSlogan_style, dark: dark_style } = styles;

  return (
    <div className={clsx(boxSlogan_style, { [dark_style]: theme })}>
      <p>
        GIAO HÀNG TIÊU CHUẨN ĐƠN TỪ 249K - TẢI NGAY G-APP TẠI
        https://onelink.to/gdnvn.
      </p>
      <p>
        {' '}
        NHẬP KHOEDEP30 GIẢM 30K CHO ĐƠN TỪ 399K - KHOEDEP50K GIẢM NGAY 50K CHO
        ĐƠN TỪ 599K - GIẢM 100K CHO HÓA ĐƠN VICHY TỪ 800k .
      </p>
    </div>
  );
}

export default memo(Slogan);
