import { memo, useMemo } from 'react';

import styles from './user-history.module.scss';
import { FavoriteCard, fakeData, PageController } from '../../index';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function UserHistory() {
  const {
    'user-history': userHistory_style,
    'box-history': boxHistory_style,
    title: title_style,
    dark: dark_style,
  } = styles;

  const { theme } = useSelector((state) => state.UIStore);
  const { products } = fakeData;
  const historyList = useMemo(() => products.slice(4, 8), [products]);

  const handelGetCurrPage = (currPage) => {
    console.log(currPage);
  };

  return (
    <div className={clsx(userHistory_style, { [dark_style]: theme })}>
      <h3 className={title_style}>Sản phẩm đã xem</h3>
      <div className={boxHistory_style}>
        {historyList.map((history) => (
          <FavoriteCard key={history._id} product={history} />
        ))}
        <PageController
          handelGetCurrPage={handelGetCurrPage}
          pages={[1, 2, 3, 4]}
        ></PageController>
      </div>
    </div>
  );
}

export default memo(UserHistory);
