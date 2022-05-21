import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions, NotificationCard } from '../../index';
import styles from './user-notification.module.scss';

function UserNotification() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.UIStore);
  const [notiAct, setNotiAct] = useState(false);
  const {
    'noti-title': notiTitle_style,
    'box-noti': boxNoti_style,
    'noti-controller': notiController_style,
    'noti-dot': notiDot_style,
    tooltip: tooltip_style,
    'last-submenu': lastSubmenu_style,
    'main-noti': mainNoti_style,
    active: active_style,
    last: last_style,
    noti: noti_style,
    dark: dark_style,
  } = styles;
  const { setIsNotificationBtn } = actions;
  useEffect(() => {
    return () => {
      dispatch(setIsNotificationBtn(false));
    };
  }, []);

  return (
    <div className={clsx(noti_style, { [dark_style]: theme })}>
      <h3 className={notiTitle_style}>Thông báo của tôi (5)</h3>
      <div className={boxNoti_style}>
        <ul className={notiController_style}>
          <li className={active_style}>
            <i className="fa-solid fa-house"></i>
            <span className={notiDot_style}></span>
            <p className={tooltip_style}>Tất cả thông báo</p>
          </li>
          <li>
            <i className="fa-solid fa-gift"></i>
            <span className={notiDot_style}></span>
            <p className={tooltip_style}>Thông báo khuyến mãi</p>
          </li>
          <li>
            <i className="fa-solid fa-clipboard-list"></i>
            <span className={notiDot_style}></span>
            <p className={tooltip_style}>Thông báo đơn hàng</p>
          </li>
          <li>
            <i className="fa-solid fa-screwdriver-wrench"></i>
            <span className={notiDot_style}></span>
            <p className={tooltip_style}>Thông báo hệ thống</p>
          </li>
          <div className={last_style}>
            <i
              onClick={() => setNotiAct(!notiAct)}
              className="fa-light fa-ellipsis-stroke-vertical"
            ></i>
            <ul
              className={clsx(lastSubmenu_style, { [active_style]: notiAct })}
            >
              <li>Đánh dấu đọc tất cả</li>
              <li>Xóa tất cả thông báo</li>
            </ul>
          </div>
        </ul>
      </div>
      <div className={mainNoti_style}>
        <NotificationCard type={'system'} />
        <NotificationCard type={'promo'} />
        <NotificationCard type={'order'} />
        <NotificationCard type={'promo'} />
        <NotificationCard type={'order'} />
      </div>
    </div>
  );
}

export default memo(UserNotification);
