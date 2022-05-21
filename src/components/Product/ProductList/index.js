import clsx from 'clsx';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { ProductBlock, PageController } from '../../index';
import { products } from '../../../fakeData';
import styles from './product-list.module.scss';

function ProductList({ productIds, conllectionName }) {
  const { theme } = useSelector((state) => state.UIStore);
  const [currPage, setCurrPage] = useState(1);

  const {
    'box-pro-list': boxProList_style,
    'product-list': productList_style,
    'box-page-controller': boxPageController_style,
    dark: dark_style,
  } = styles;
  const currProducts = useMemo(() => {
    return products.filter((product) =>
      productIds.find((pId) => pId.page === currPage).ids.includes(product._id)
    );
  }, [currPage, productIds]);

  const pages = useMemo(() => {
    return productIds.map((pId) => pId.page);
  }, [productIds]);

  const handelGetCurrPage = (page) => {
    setCurrPage(page);
  };

  return (
    <div className={clsx(productList_style, { [dark_style]: theme })}>
      <h1>{conllectionName}</h1>
      <div className={boxProList_style}>
        {currProducts.map((product) => (
          <ProductBlock key={product._id} product={product} list={true} />
        ))}
      </div>
      <div className={boxPageController_style}>
        <PageController handelGetCurrPage={handelGetCurrPage} pages={pages} />
      </div>
    </div>
  );
}

export default memo(ProductList);
