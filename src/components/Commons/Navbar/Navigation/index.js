import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavMenuRight, NavCategory, Search, actions } from '../../../index';
import { memo, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styles from './navigation.module.scss';

function Navigation() {
  const { setNavFixed } = actions;
  const { UIStore } = useSelector((state) => state);
  const { theme, navFixed } = UIStore;
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState();
  const [navFixedAct, setNavFixedAct] = useState(false);

  const {
    'search-btn': searchBtn_style,
    'search-input': searchInput_style,
    'nav-main': navMain_style,
    'fixed-top': fixedTop_style,
    'search-active': searchActive_style,
    close: close_style,
    search: search_style,
    menu: menu_style,
    left: left_style,
    logo: logo_style,
    nav: nav_style,
    dark: dark_style,
  } = styles;

  const handleResetInputSearch = (rs) => {
    setSearchInput(rs);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !searchInput) {
        if (!navFixedAct) {
          dispatch(setNavFixed(true));
          setNavFixedAct(true);
        }
      } else {
        if (navFixedAct) {
          dispatch(setNavFixed(false));
          setNavFixedAct(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navFixedAct, searchInput]);

  return (
    <div
      className={clsx(nav_style, {
        [dark_style]: theme,
        [searchActive_style]: searchInput,
        [fixedTop_style]: !searchInput && navFixed,
        'fixed-top': !searchInput && navFixed,
      })}
    >
      <Container>
        <Row>
          <div className={navMain_style}>
            <Col lg="3" className={clsx(menu_style, left_style)}>
              <h1 id={logo_style}>
                <Link to="/">16Skin</Link>
              </h1>
            </Col>
            <Col lg="4" className={search_style}>
              <div className={searchInput_style}>
                <button id={searchBtn_style}>
                  <i className="fa fa-search"></i>
                </button>
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  placeholder="tìm kiếm sản phẩm, bài viết..."
                />
                <i
                  onClick={() => setSearchInput('')}
                  className={clsx(close_style, 'fa-solid fa-xmark')}
                ></i>
                <Search
                  inputSearch={searchInput}
                  handleResetInput={handleResetInputSearch}
                />
              </div>
            </Col>
            <NavMenuRight navFixed={navFixedAct} />
          </div>
        </Row>
      </Container>
      <NavCategory navFixed={navFixedAct} />
    </div>
  );
}

export default memo(Navigation);
