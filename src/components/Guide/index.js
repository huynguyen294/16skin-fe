import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import styles from './guide.module.scss';
import { fakeData } from '../index';

function Guide() {
  const { theme } = useSelector((state) => state.UIStore);
  const {
    guide: guide_style,
    'guide-title': guideTitle_style,
    part: part_style,
    'part-title': partTitle_style,
    'hello-ticker': helloTicker_style,
    left: left_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(guide_style, { [dark_style]: theme })}>
      <img
        className={helloTicker_style}
        src={fakeData.tickerPaths[3]}
        alt="hello ticker"
      />
      <h1 className={guideTitle_style}>Giới thiệu trang web</h1>
      <ul className={part_style}>
        <h3 className={partTitle_style}>Chú ý:</h3>
        <li>- trang web có 2 giao diện sáng và tối</li>
        <li>- dữ liệu trên trang web đều là ảo</li>
        <li>
          - khi reload sẽ reset lại tất cả dữ liệu, kể cả trạng thái đăng nhập
        </li>
        <li>
          - phải ĐĂNG NHẬP mới có thể sử dụng các chức năng như: xem thông tin
          tài khoảng, thông báo, quản lí đơn hàng, mã giảm giá, trang cá nhân,
          thay đổi địa chỉ trong giỏ hàng, chọn địa chỉ khi thanh toán...
        </li>
        <li>
          - các tính năng chưa thực hiện: viết blog, quên mật khẩu, chưa thực
          hiện responsive.
        </li>
      </ul>
      <ul className={part_style}>
        <h3 className={partTitle_style}>Tài khoản dành cho khách:</h3>
        <li>- username: kh1</li>
        <li>- password: 1234</li>
      </ul>
      <img
        className={clsx(helloTicker_style, left_style)}
        src={fakeData.tickerPaths[2]}
        alt="hello ticker"
      />
    </div>
  );
}

export default memo(Guide);
