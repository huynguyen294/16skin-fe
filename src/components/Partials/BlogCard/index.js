import clsx from 'clsx';
import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import styles from './blog-card.module.scss';
import { fakeData } from '../../index';

function BlogCard({ blog, author }) {
  const { theme } = useSelector((state) => state.UIStore);
  const { users } = fakeData;
  const authorInfo = useMemo(() => {
    return users.find((user) => user._id === blog.author_id);
  }, [users]);

  const {
    'blog-card': blogCard_style,
    'card-content': cardContent_style,
    'card-title': cardTitle_style,
    'card-description': cardDescription_style,
    'content-footer': contentFooter_style,
    'card-time': cardTime_style,
    'read-time': readTime_style,
    'card-submenu': cardSubmenu_style,
    'submenu-btn': submenuBtn_style,
    'card-like': cardLike_style,
    'card-comment': cardComment_style,
    'cover-image': coverImage_style,
    'author-info': authorInfo_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(blogCard_style, { [dark_style]: theme })}>
      {author ? <img src={blog.cover_image} alt="anh bia" /> : ''}
      <div className={cardContent_style}>
        {author ? (
          ''
        ) : (
          <div className={authorInfo_style}>
            <img src={authorInfo.avatar} alt="avatar" />
            <p>{authorInfo.name}</p>
            <span>2 ngày trước</span>
          </div>
        )}
        <p className={cardTitle_style}>{blog.subject}</p>
        <p className={cardDescription_style}>{blog.description}</p>
        <div className={contentFooter_style}>
          {author ? (
            <div>
              <p className={cardTime_style}>2 ngày trước</p>
              <p className={readTime_style}>5 phút đọc</p>
            </div>
          ) : (
            ''
          )}
          <div>
            <p className={cardLike_style}>
              <i className="fa-solid fa-circle-heart"></i> 20 lượt thích
            </p>
            <p className={cardComment_style}>
              <i className="fa-solid fa-comments"></i> 5 bình luận
            </p>
          </div>
        </div>
      </div>
      {author ? (
        ''
      ) : (
        <img
          className={coverImage_style}
          src={blog.cover_image}
          alt="anh bia"
        />
      )}
      <i
        className={clsx(
          submenuBtn_style,
          'fa-light fa-ellipsis-stroke-vertical'
        )}
      ></i>
      <ul className={cardSubmenu_style}>
        <li>
          <i className="fa-brands fa-facebook"></i> Chia sẻ lên facebook
        </li>
        {author ? (
          ''
        ) : (
          <li>
            <i className="fa-light fa-bookmark"></i> Thêm vào xem sau
          </li>
        )}
        <li>
          <i className="fa-light fa-copy"></i> Sao chép liên kết
        </li>
        <li>
          <i className="fa-light fa-flag-swallowtail"></i> Báo cáo bài viết
        </li>
        {author ? (
          <React.Fragment>
            <li>
              <i className="fa-light fa-circle-trash"></i> Xóa bài viết
            </li>
            <li>
              <i className="fa-light fa-pen-to-square"></i> Chỉnh sửa bài viết
            </li>
          </React.Fragment>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
}

export default memo(BlogCard);
