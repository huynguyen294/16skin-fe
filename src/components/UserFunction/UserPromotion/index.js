import { memo } from 'react';

import styles from './promotion.module.scss'
import {PromotionCard} from '../../index'
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function UserDiscount() {
  const {theme} = useSelector(state=>state.UIStore)

  const {
    "box-promotion": boxPromotion_style,
    "promotion-title": promotionTitle_style,
    "promotion-list": promotionList_style,
    dark: dark_style
  } = styles

  return (
    <div className={clsx(boxPromotion_style, {[dark_style]: theme})}>
      <h3 className={promotionTitle_style}>Mã giảm giá của tôi</h3>
      <div className={promotionList_style}>
        <PromotionCard />
        <PromotionCard />
        <PromotionCard />
        <PromotionCard />
        <PromotionCard />
      </div>
    </div>  
  )
}

export default memo(UserDiscount);
