import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './nav-sub-category.module.scss';

function NavSubCategory({ collection_name, collections }) {
  const { theme, navFixed } = useSelector((state) => state.UIStore);

  const {
    'nav-sub-category': navSubCategory_style,
    'sub-cat-name': subCatName_style,
    'box-sub-cat': boxSubCat_style,
    'block-sub-cat': blockSubCat_style,
    'cat-name': catName_style,
    'nav-fixed': navFixed_style,
    dark: dark_style,
  } = styles;

  return (
    <li
      className={clsx(navSubCategory_style, {
        [dark_style]: theme,
        [navFixed_style]: navFixed,
      })}
    >
      <a href="/#" className={subCatName_style}>
        {collection_name}
      </a>
      <ul className={boxSubCat_style}>
        {collections.map((collection) => {
          return (
            <li key={collection._id} className={blockSubCat_style}>
              <Link
                to={'/collections/' + collection.slug}
                className={catName_style}
              >
                {collection.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default memo(NavSubCategory);
