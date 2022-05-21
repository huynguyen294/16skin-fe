import { memo, useRef, useState, useLayoutEffect, useEffect } from 'react';

import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import { Slogan } from '../index';
import style from './slider.module.scss';
import { fakeData } from '../..';

function Slider() {
  //taọ dữ liệu ảo
  const { slides } = fakeData;
  const {
    'slide-block': slideBlock_style,
    'slider-btn': sliderBtn_style,
    'box-slides': boxSlides_style,
    left: left_style,
    right: right_style,
    slide: slide_style,
    active: active_style,
    slider: slider_style,
    dark: dark_style,
  } = style;
  const { theme } = useSelector((state) => state.UIStore);

  const SlideLeftBtn = useRef();
  const SlideRightBtn = useRef();
  const [currSlide, setCurrSlide] = useState(1);

  const handleLeft = () => {
    setCurrSlide((prev) => prev - 1);
  };

  const handleRight = () => {
    setCurrSlide((prev) => prev + 1);
  };

  useEffect(() => {
    const timeId = setInterval(handleRight, 2000);

    return () => {
      clearInterval(timeId);
    };
  }, [currSlide]);

  useLayoutEffect(() => {
    if (currSlide > slides.length - 1) {
      setCurrSlide(1);
    }
    if (currSlide < 0) {
      setCurrSlide(slides.length - 1);
    }
  }, [currSlide, slides.length]);

  return (
    <Row>
      <div className={clsx(slider_style, { [dark_style]: theme })}>
        <Slogan />
        <div className={boxSlides_style}>
          {slides.map((slide) => {
            return (
              <div className={slideBlock_style} key={slide._id}>
                <Link
                  to={'/collections/sale-ca-thang-tu'}
                  className={clsx(slide_style, {
                    [active_style]: currSlide === slide._id,
                  })}
                  style={{
                    backgroundImage: `url(${slide.bannerUrl})`,
                  }}
                  aria-hidden="true"
                ></Link>
              </div>
            );
          })}

          <button
            ref={SlideLeftBtn}
            className={clsx(sliderBtn_style, left_style)}
            onClick={handleLeft}
          >
            <i className="fa fa-angle-left"></i>
          </button>

          <button
            ref={SlideRightBtn}
            className={clsx(sliderBtn_style, right_style)}
            onClick={handleRight}
          >
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </Row>
  );
}

export default memo(Slider);
