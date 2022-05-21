import clsx from 'clsx';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './box-evaluete-card.module.scss';
import { CommentCard, EvalueteFilter, PageController } from '../../index';
import { comments } from '../../../fakeData';

function BoxEvalueteCard() {
  const { theme } = useSelector((state) => state.UIStore);
  const pages = useMemo(() => comments.map((cmt) => cmt.page), []);

  const [currCmt, setCurrCmt] = useState(
    comments.find((cmt) => cmt.page === 1)
  );

  const {
    'box-evaluete-card': boxEvalueteCard_style,
    'box-evaluate': boxEvaluate_style,
    'evaluate-title': evaluateTitle_style,
    dark: dark_style,
  } = styles;

  const handelGetCurrPage = (page) => {
    setCurrCmt(comments.find((cmt) => cmt.page === page));
  };

  return (
    <div className={clsx(boxEvalueteCard_style, { [dark_style]: theme })}>
      <h1 className={evaluateTitle_style}>Đánh giá sản phẩm</h1>
      <div className={boxEvaluate_style}>
        <EvalueteFilter />
      </div>
      {currCmt.cmts.map((cmt) => (
        <CommentCard key={cmt._id} cmt={cmt} />
      ))}
      <PageController handelGetCurrPage={handelGetCurrPage} pages={pages} />
    </div>
  );
}

export default memo(BoxEvalueteCard);
