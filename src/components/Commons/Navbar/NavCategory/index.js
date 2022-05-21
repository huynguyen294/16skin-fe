import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavSubCategory } from '../index';
import { Container } from 'react-bootstrap';

import { fakeData } from '../../../index';
import styles from './nav-category.module.scss';
function NavCategory() {
  const { theme } = useSelector((state) => state.UIStore);
  const collections = fakeData.collections;
  const {
    'nav-category': navCategory_style,
    'box-nav-category': boxNavCategory,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(navCategory_style, { [dark_style]: theme })}>
      <Container>
        <ul className={boxNavCategory}>
          {collections.map((collection) => {
            return (
              <NavSubCategory
                key={collection._id}
                collection_name={collection.name}
                collections={collection.collections}
              />
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default memo(NavCategory);
