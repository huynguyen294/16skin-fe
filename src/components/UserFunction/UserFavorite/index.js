import { memo, useMemo } from 'react';

import styles from './user-favorite.module.scss';
import { FavoriteCard, fakeData, PageController } from '../../index';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function UserFavorite() {
  const {
    'user-favorite': userFavorite_style,
    'box-favorite': boxFavorite_style,
    title: title_style,
    dark: dark_style,
  } = styles;

  const { theme } = useSelector((state) => state.UIStore);
  const { products } = fakeData;
  const favoriteList = useMemo(() => products.slice(2, 6), [products]);

  const handelGetCurrPage = (currPage) => {
    console.log(currPage);
  };

  return (
    <div className={clsx(userFavorite_style, { [dark_style]: theme })}>
      <h3 className={title_style}>Danh sách yêu thích (6)</h3>
      <div className={boxFavorite_style}>
        {favoriteList.map((favorite) => (
          <FavoriteCard key={favorite._id} product={favorite} />
        ))}
        <PageController
          handelGetCurrPage={handelGetCurrPage}
          pages={[1, 2, 3]}
        ></PageController>
      </div>
    </div>
  );
}

export default memo(UserFavorite);
