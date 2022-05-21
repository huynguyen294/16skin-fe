import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './search.module.scss';
import { fakeData } from '../../index';

function Search({ inputSearch, handleResetInput }) {
  const { theme } = useSelector((state) => state.UIStore);
  const [inputSearchClone, setInputSearchClone] = useState(inputSearch);
  const {
    'search-menu': searchMenu_style,
    'search-history': searchHistory_style,
    'search-product': searchProduct_style,
    'search-title': searchTitle_style,
    'search-card': searchCard_style,
    'search-blog': searchBlog_style,
    active: active_style,
    close: close_style,
    dark: dark_style,
  } = styles;

  const handleResetActive = () => {
    setInputSearchClone('');
    handleResetInput('');
  };

  useEffect(() => {
    setInputSearchClone(inputSearch);
  }, [inputSearch]);

  return (
    <ul
      className={clsx(searchMenu_style, {
        [dark_style]: theme,
        [active_style]: inputSearchClone,
      })}
    >
      <li className={searchHistory_style}>
        <ul>
          <li>
            <div>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>Sữa rữa mặt</span>
            </div>
            <i className={clsx(close_style, 'fa-solid fa-xmark')}></i>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>Dành cho nam</span>
            </div>
            <i className={clsx(close_style, 'fa-solid fa-xmark')}></i>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>So natural</span>
            </div>
            <i className={clsx(close_style, 'fa-solid fa-xmark')}></i>
          </li>
        </ul>
      </li>
      <li className={searchProduct_style}>
        <div className={searchTitle_style}>
          <h3>Sản phẩm liên quan</h3>
          <Link onClick={handleResetActive} to={'/collections/' + inputSearch}>
            Xem thêm
          </Link>
        </div>
        <hr />
        <ul>
          <li className={searchCard_style}>
            <Link onClick={handleResetActive} to="/details/1">
              <img src={fakeData.imageUrls.searchProduct} alt="ảnh sản phẩm" />
              <p>Dầu gội hư tổn LOREAL ELSEVE 650ML</p>
            </Link>
          </li>
          <li className={searchCard_style}>
            <Link onClick={handleResetActive} to="/details/1">
              <img src={fakeData.imageUrls.searchProduct} alt="ảnh sản phẩm" />
              <p>Dầu gội hư tổn LOREAL ELSEVE 650ML</p>
            </Link>
          </li>
          <li className={searchCard_style}>
            <Link onClick={handleResetActive} to="/details/1">
              <img src={fakeData.imageUrls.searchProduct} alt="ảnh sản phẩm" />
              <p>Dầu gội hư tổn LOREAL ELSEVE 650ML</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className={searchBlog_style}>
        <div className={searchTitle_style}>
          <h3>Blog liên quan</h3>
          <Link onClick={handleResetActive} to="/collections">
            Xem thêm
          </Link>
        </div>
        <hr />
        <ul>
          <li className={searchCard_style}>
            <Link onClick={handleResetActive} to="/blogs">
              <img src={fakeData.imageUrls.searchBlog} alt="ảnh blog" />
              <p>BÍ QUYẾT TRANG ĐIỂM TRONG VEO NHƯ IDOL HÀN</p>
            </Link>
          </li>
          <li className={searchCard_style}>
            <Link onClick={handleResetActive} to="/blogs">
              <img src={fakeData.imageUrls.searchBlog} alt="ảnh blog" />
              <p>BÍ QUYẾT TRANG ĐIỂM TRONG VEO NHƯ IDOL HÀN</p>
            </Link>
          </li>
          <li className={searchCard_style}>
            <Link onClick={handleResetActive} to="/blogs">
              <img src={fakeData.imageUrls.searchBlog} alt="ảnh blog" />
              <p>BÍ QUYẾT TRANG ĐIỂM TRONG VEO NHƯ IDOL HÀN</p>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default memo(Search);
