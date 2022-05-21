import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { fakeData } from '../..';
import ListCheckbox from '../../Others/ListCheckbox';

import styles from './filter.module.scss';

function Filter() {
  const { theme } = useSelector((state) => state.UIStore);

  const { collections } = fakeData;
  const brands = collections[3].collections;

  const { filter: filter_style, dark: dark_style } = styles;
  return (
    <div className={clsx(filter_style, { [dark_style]: theme })}>
      <ListCheckbox list={brands} title={'Thuơng Hiệu'}></ListCheckbox>
      <ListCheckbox
        list={[
          { name: 'Dưới 500k', _id: 1 },
          { name: 'Từ 500k đến 1 triệu', _id: 2 },
          { name: 'Từ 1 triệu đến 3 triệu', _id: 3 },
          { name: 'Trên 3 triệu', _id: 4 },
        ]}
        title={'Giá tiền'}
      ></ListCheckbox>
    </div>
  );
}

export default memo(Filter);
