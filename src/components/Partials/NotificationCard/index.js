import clsx from "clsx";
import { memo } from "react"
import { useSelector } from "react-redux";

import styles from './notification-card.module.scss'

function NotificationCard({type}){

    const {theme}=useSelector(state=>state.UIStore)

    const { 
        "noti-card": notiCard_style,
        "readed-btn": readedBtn_style,
        "delete-btn": deleteBtn_style,
        dark: dark_style,
        content: content_style,
        type: type_style,
        promo: promo_style,
        order: order_style,
        system: system_style,
        time: time_style,
    } = styles;

    return (
        <div className={clsx(notiCard_style, {[dark_style]: theme})}>
            <p className={time_style}>12/10/2020</p>
            <i className={clsx(type_style, {
                ["fa-solid fa-gift"]:type==="promo",
                ["fa-solid fa-list"]:type==="order",
                ["fa-solid fa-screwdriver-wrench"]:type==="system",
                [promo_style]:type==="promo",
                [order_style]:type==="order",
                [system_style]:type==="system",
            })}></i>
            <p className={content_style}>
            Hãy thay đổi mật khẩu thường xuyên để nâng cao bảo mật. Ngoài ra: 1. Không nên sử dụng chung mật khẩu của email với mật khẩu của các tài khoản khác. 2. Luôn đăng xuất khỏi các tài khoản sau khi sử dụng trên thiết bị công cộng hoặc thiết bị không phải của bản thân.
            </p>
            <button className={readedBtn_style}>Đánh dấu là đã đọc</button>
            <button className={deleteBtn_style}>Xóa</button>
        </div>
    )
}

export default memo(NotificationCard)