import { memo } from 'react';
import { Row, Col } from 'react-bootstrap';

import styles from './blogs.module.scss';
import { fakeData, BlogCard, PageController } from '../index';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function Blogs() {
  const { theme } = useSelector((state) => state.UIStore);
  const blogsList = fakeData.blogs;
  const {
    blogs: blogs_style,
    title: title_style,
    description: description_style,
    'box-blogs': boxBlogs_style,
    'propose-search': proposeSearch_style,
    'propose-title': proposeTitle_style,
    dark: dark_style,
  } = styles;

  const handelGetCurrPage = (currPage) => {
    console.log(currPage);
  };

  return (
    <div className={clsx(blogs_style, { [dark_style]: theme })}>
      <h1 className={title_style}>Bài viết nổi bật</h1>
      <p className={description_style}>
        Tổng hợp tất cả bài viết nổi bật về kinh nghiệm chăm sóc da và làm đẹp.
      </p>
      <Row>
        <Col lg={8} className={boxBlogs_style}>
          {blogsList.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
          <PageController
            pages={[1, 2, 3, 4, 5, 6, 7]}
            handelGetCurrPage={handelGetCurrPage}
          ></PageController>
        </Col>
        <Col lg={4} className={proposeSearch_style}>
          <h3 className={proposeTitle_style}>Các chủ đề được đề xuất</h3>
          <div>
            <p>Trị gàu</p>
            <p>Dưỡng tóc</p>
            <p>Chống lão hóa</p>
            <p>Quà tặng phái nữ</p>
            <p>Làm đẹp cho nam</p>
            <p>Trị mụn dậy thì</p>
          </div>
          <hr />
          <h3 className={proposeTitle_style}>tags</h3>
          <div>
            <p>Trị gàu</p>
            <p>Dưỡng tóc</p>
            <p>Làm đẹp</p>
            <p>Mụn</p>
            <p>Thơm</p>
            <p>Rẻ</p>
            <p>Tốt</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default memo(Blogs);
