import clsx from 'clsx';
import { memo } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './directory-path.module.scss';

function DirectoryPath() {
  const { theme } = useSelector((state) => state.UIStore);

  const { 'directory-path': directoryPath_style, dark: dark_style } = styles;

  return (
    <Row>
      <ul className={clsx(directoryPath_style, { [dark_style]: theme })}>
        <li>
          <a href="/#">Trang chủ</a>
          <i className="fa fa-angle-right"></i>
        </li>
        <li>
          <a href="/#">Red peel</a>
          <i className="fa fa-angle-right"></i>
        </li>
        <li>
          <a href="/#">Red peel premium</a>
        </li>
      </ul>
    </Row>
  );
}

export default memo(DirectoryPath);
