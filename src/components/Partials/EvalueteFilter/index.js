import clsx from 'clsx';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './evaluete-filter.module.scss';
import { Star } from '../../index';

function EvalueteFilter() {
  const { theme } = useSelector((state) => state.UIStore);

  const [filterType, setFilterType] = useState(0);

  const {
    'evaluete-filter': evalueteFilter_style,
    'filter-detail': filterDetail_style,
    'blocks-filter': blocksFilter,
    'filter-type': filterType_style,
    'filter-all': filterAll_style,
    active: active_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(evalueteFilter_style, { [dark_style]: theme })}>
      <div className={filterDetail_style}>
        <h3>
          <span>4.9</span> trên 5
        </h3>
        <Star size="lg"></Star>
      </div>
      <div className={blocksFilter}>
        <a
          href="/#"
          className={clsx(filterType_style, filterAll_style, {
            [active_style]: filterType === 0,
          })}
          onClick={(e) => {
            e.preventDefault();
            setFilterType(0);
          }}
        >
          Tất cả
        </a>
        <a
          href="/#"
          className={clsx(filterType_style, {
            [active_style]: filterType === 1,
          })}
          onClick={(e) => {
            e.preventDefault();
            setFilterType(1);
          }}
        >
          5 sao
        </a>
        <a
          href="/#"
          className={clsx(filterType_style, {
            [active_style]: filterType === 2,
          })}
          onClick={(e) => {
            e.preventDefault();
            setFilterType(2);
          }}
        >
          4 sao
        </a>
        <a
          href="/#"
          className={clsx(filterType_style, {
            [active_style]: filterType === 3,
          })}
          onClick={(e) => {
            e.preventDefault();
            setFilterType(3);
          }}
        >
          3 sao
        </a>
        <a
          href="/#"
          className={clsx(filterType_style, {
            [active_style]: filterType === 4,
          })}
          onClick={(e) => {
            e.preventDefault();
            setFilterType(4);
          }}
        >
          2 sao
        </a>
        <a
          href="/#"
          className={clsx(filterType_style, {
            [active_style]: filterType === 5,
          })}
          onClick={(e) => {
            e.preventDefault();
            setFilterType(5);
          }}
        >
          1 sao
        </a>
        <a
          href="/#"
          className={clsx(filterType_style, {
            [active_style]: filterType === 6,
          })}
          onClick={(e) => {
            e.preventDefault();
            setFilterType(6);
          }}
        >
          có bình luận
        </a>
        <a
          href="/#"
          className={clsx(filterType_style, {
            [active_style]: filterType === 7,
          })}
          onClick={(e) => {
            e.preventDefault();
            setFilterType(7);
          }}
        >
          có ảnh/video
        </a>
      </div>
    </div>
  );
}
export default memo(EvalueteFilter);
