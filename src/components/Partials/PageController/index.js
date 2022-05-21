import clsx from 'clsx';
import { memo, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './page-controller.module.scss';

function PageController({ handelGetCurrPage, pages }) {
  const { theme } = useSelector((state) => state.UIStore);
  const lenghtActive = 5;
  const [pagesActive, setPagesActive] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const {
    'page-controller': pageController_style,
    dark: dark_style,
    active: active_style,
  } = styles;

  const handelSetCurrPage = (page) => {
    setCurrPage(page);
  };

  useLayoutEffect(() => {
    //xử lí trường hợp out range
    if (currPage < 1) {
      setCurrPage(1);
    } else if (currPage > pages.length) {
      setCurrPage(pages.length);
    }
    // trả page hiện tại ra parent
    if (currPage > 0 && currPage <= pages.length) {
      handelGetCurrPage(currPage);
    }

    //xử lí set pages active
    if (currPage < lenghtActive) {
      setPagesActive([...pages.slice(0, lenghtActive)]);
    } else if (currPage >= pages.length - lenghtActive + 1) {
      setPagesActive([
        ...pages.slice(pages.length - lenghtActive, pages.length),
      ]);
    } else {
      if (lenghtActive % 2 === 0) {
        setPagesActive([
          ...pages.slice(
            currPage - lenghtActive / 2,
            currPage + lenghtActive / 2
          ),
        ]);
      } else {
        setPagesActive([
          ...pages.slice(
            currPage - lenghtActive / 2,
            currPage + lenghtActive / 2
          ),
        ]);
      }
    }
  }, [currPage, pages.length, pages]);

  return (
    <div className={clsx(pageController_style, { [dark_style]: theme })}>
      <button onClick={() => setCurrPage(currPage - 1)}>
        <i className="fa-solid fa-caret-left"></i>
      </button>
      {currPage <= lenghtActive ? (
        ''
      ) : (
        <button
          className={clsx({ [active_style]: currPage === 1 })}
          onClick={() => setCurrPage(1)}
        >
          1
        </button>
      )}
      {currPage < lenghtActive ? '' : <button>...</button>}
      {pagesActive.map((page) => (
        <button
          className={clsx({ [active_style]: currPage === page })}
          key={page}
          onClick={() => handelSetCurrPage(page)}
        >
          {page}
        </button>
      ))}
      {currPage >= pages.length - lenghtActive + 1 ? '' : <button>...</button>}
      {currPage >= pages.length - lenghtActive + 1 ? (
        ''
      ) : (
        <button onClick={() => setCurrPage(pages[pages.length - 1])}>
          {pages[pages.length - 1]}
        </button>
      )}
      <button onClick={() => setCurrPage(currPage + 1)}>
        <i className="fa-solid fa-caret-right"></i>
      </button>
    </div>
  );
}

export default memo(PageController);
