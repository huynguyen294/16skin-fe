import clsx from 'clsx';
import React, { memo } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { BlogCard, fakeData, DirectoryPath, PageController } from '../index';
import styles from './my-timeline.module.scss';

function MyTimeline() {
  const {
    'my-timeline': myTimeline_style,
    'user-info': userInfo_style,
    'user-avatar': userAvatar_style,
    'user-name': userName_style,
    'follower-counter': followerCounter_style,
    'user-description': userDescription_style,
    'follow-btn': followBtn_style,
    'following-list': followingList_style,
    'following-card': followingCard_style,
    'card-name': cardName_style,
    'blog-list': blogList_style,
    'search-input': searchInput_style,
    'box-blogs': boxBlogs_style,
    'list-title': listTitle_style,
    dark: dark_style,
  } = styles;

  const { blogs } = fakeData;
  const { UIStore, userStore } = useSelector((state) => state);
  const { userInfo } = userStore;
  const { theme } = UIStore;

  const handelGetCurrPage = (currPage) => {
    console.log(currPage);
  };

  return (
    <React.Fragment>
      <DirectoryPath></DirectoryPath>
      <Row className={clsx(myTimeline_style, { [dark_style]: theme })}>
        <Col lg={8} className={blogList_style}>
          <div className={searchInput_style}>
            <i className="fa-light fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Tìm kiếm trong các bài viết của Nguyễn Hoàng Huy"
            />
          </div>
          <div className={boxBlogs_style}>
            {blogs.map((blog) => (
              <BlogCard blog={blog} author={true} />
            ))}
            <PageController
              handelGetCurrPage={handelGetCurrPage}
              pages={[1, 2, 3, 4, 5]}
            />
          </div>
        </Col>
        <Col lg={4} className={userInfo_style}>
          <img
            src={userInfo.avatar}
            alt="avatar"
            className={userAvatar_style}
          />
          <h5 className={userName_style}>Nguyễn Hoàng Huy</h5>
          <p className={followerCounter_style}>2.7K Người theo dõi</p>
          <p className={userDescription_style}>
            Professor, Forbes Contributor, Race Scholar, Activist, Therapist,
            Keynote Speaker, Consultant, Wife, Mother, & Addict of Ice Cream
            &Cheese.
          </p>
          <button className={followBtn_style}>
            <i className="fa-light fa-pen-to-square"></i>Chỉnh sửa mô tả
          </button>
          <ul className={followingList_style}>
            <p className={listTitle_style}>Đang theo dõi</p>
            <li className={followingCard_style}>
              <div>
                <img src={userInfo.avatar} alt="avatar" />
                <p className={cardName_style}>Nguyễn Hoàng Huy</p>
              </div>
              <i className="fa-light fa-ellipsis"></i>
            </li>
            <li className={followingCard_style}>
              <div>
                <img src={userInfo.avatar} alt="avatar" />
                <p className={cardName_style}>Nguyễn Hoàng Huy</p>
              </div>
              <i className="fa-light fa-ellipsis"></i>
            </li>
            <li className={followingCard_style}>
              <div>
                <img src={userInfo.avatar} alt="avatar" />
                <p className={cardName_style}>Nguyễn Hoàng Huy</p>
              </div>
              <i className="fa-light fa-ellipsis"></i>
            </li>
          </ul>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default memo(MyTimeline);
