import { memo } from 'react';

import styles from './address-card.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

function AddressCard({ defautAddress }) {
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'address-card': addressCard_style,
    'edit-btn': editBtn_style,
    'delete-btn': deleteBtn_style,
    'address-info': addressInfo_style,
    buttons: buttons_style,
    name: name_style,
    content: content_style,
    sdt: sdt_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(addressCard_style, { [dark_style]: theme })}>
      <div className={addressInfo_style}>
        <h3 className={name_style}>
          Khách Hàng 1{' '}
          {defautAddress ? (
            <span>
              <i className="fa-light fa-circle-check"></i>Địa chỉ mặc định
            </span>
          ) : (
            ''
          )}
        </h3>
        <p className={content_style}>
          <span>Địa chỉ:</span>32 Hai Bà Trừng Quận 3 Thành Phố Hồ Chí Mình
        </p>
        <div className={sdt_style}>
          <span>Điện thoại:</span>096696696
        </div>
      </div>
      <div className={buttons_style}>
        <button className={editBtn_style}>Chỉnh sửa</button>
        {defautAddress ? '' : <button className={deleteBtn_style}>Xóa</button>}
      </div>
    </div>
  );
}

export default memo(AddressCard);
