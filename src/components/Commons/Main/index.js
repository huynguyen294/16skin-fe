import clsx from 'clsx';
import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Login,
  Collections,
  Details,
  Profile,
  Cart,
  Payment,
  DeliveryDetail,
  MyTimeline,
  Blogs,
  HandleModals,
  Register,
  Guide,
} from '../../index';
import styles from './main.module.scss';

function Main({ navFixed }) {
  const { main: main_style, 'nav-fixed': navFixed_style } = styles;
  const { isNotificationBtn } = useSelector((state) => state.UIStore);
  return (
    <div className={clsx(main_style, { [navFixed_style]: navFixed })}>
      <HandleModals></HandleModals>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Login />}></Route>
          <Route path="/register/sheet" element={<Register />}></Route>
          <Route
            path="/profile"
            element={<Profile isNotificationBtn={isNotificationBtn} />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path={'/collections'} element={<Collections />}></Route>
          <Route path={'/collections/:slug'} element={<Collections />}></Route>
          <Route path="/details/:product_id" element={<Details />}></Route>
          <Route path="/delivering" element={<DeliveryDetail />}></Route>
          <Route path="/my-blog" element={<MyTimeline />}></Route>
          <Route path="/read-blog" element={<Blogs />}></Route>
          <Route path="/guide" element={<Guide />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default memo(Main);
