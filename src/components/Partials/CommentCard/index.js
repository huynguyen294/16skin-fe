import clsx from 'clsx';
import { memo, useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import styles from './comment-card.module.scss';
import { Star } from '../../index';
import { users } from '../../../fakeData';

function CommentCard({ cmt }) {
  const { theme } = useSelector((state) => state.UIStore);
  const user = useMemo(
    () => users.find((user) => user._id === cmt.user_id),
    [cmt.user_id]
  );

  const {
    'box-eval-images': boxEvalImages,
    'evaluete-card': evalueteCard_style,
    'user-avatar': userAvatar_style,
    'user-name': userName_style,
    'eval-time': evalTime_style,
    'eval-content': evalContent_style,
    evaluete: evaluete_style,
    dark: dark_style,
  } = styles;

  return (
    <Row className={clsx(evalueteCard_style, { [dark_style]: theme })}>
      <Col lg={1} className={userAvatar_style}>
        <img src={user.avatar} alt="avartar" />
      </Col>
      <Col className={evaluete_style} lg={11}>
        <p className={userName_style}>{user.name}</p>
        <Star numOfStar={cmt.star} size="sm" />
        <p className={evalTime_style}>{cmt.time}</p>
        <p className={evalContent_style}>{cmt.content}</p>
        <div className={boxEvalImages}>
          {cmt.imgs.length
            ? cmt.imgs.map((img, idx) => (
                <img key={idx} src={img} alt="ảnh đánh giá" />
              ))
            : ''}
        </div>
      </Col>
    </Row>
  );
}

export default memo(CommentCard);
