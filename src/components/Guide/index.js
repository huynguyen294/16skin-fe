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
        <h3 className={partTitle_style}>Mô tả:</h3>
        <li>
          - Đây là trang web bán hàng chỉ thực hiện front-end bao gồm các tính
          năng: giao diện tối - sáng, gộp sản phẩm theo danh mục, xem chi tiết
          sản phẩm, quản lí giỏ hàng, đặt hàng, đọc blog, quản lí tài khoảng
          (profile, thông báo, địa chỉ..), quản lí đơn hàng, theo dõi tình trạng
          đơn hàng.
        </li>
      </ul>
      <ul className={part_style}>
        <h3 className={partTitle_style}>Điểm nhấn kỹ thuật:</h3>
        <li>
          - Thực hiện layout cho nhiều trang web và routing các trang web.
        </li>
        <li>
          - Render data ảo lên giao diện (sản phẩm, bộ sưu tập, banner, comment,
          các đơn đơn hàng, các bài blogs, các địa chỉ của khách hàng.).
        </li>
        <li>- Xem thanh cuộn bộ sưu tập sản phẩm hot.</li>
        <li>
          - Chuyển trang khi xem đánh giá sản phẩm và trong danh mục sản phẩm.
        </li>
        <li>- Banner xoay vòng tự động thay đổi sau 2s.</li>
        <li>- Phân loại sản phẩm theo bộ sưu tập</li>
        <li>
          - Xem chi tiết sản phẩm: load thông tin giá, sale, đánh giá - bình
          luận, hình ảnh (5 ảnh), thêm vào yêu thích , giỏ hàng, xem sản phẩm
          tương tự.
        </li>
        <li>
          - Logic các modal (xác nhận sdt bằng code khi đăng kí, thêm thẻ atm
          khi thanh toán, thêm sản phẩm vào giỏ hàng) với redux.
        </li>
        <li>- Css cho các component </li>
      </ul>
      <ul className={part_style}>
        <h3 className={partTitle_style}>Chú ý:</h3>
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
