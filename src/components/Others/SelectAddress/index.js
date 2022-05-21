import clsx from 'clsx';
import { memo, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './select.module.scss';

function SelectAddress({ handleGetOptionIdx, lable, options }) {
  const { theme } = useSelector((state) => state.UIStore);
  const [active, setActive] = useState(false);
  const [currOption, setCurrOption] = useState(0);
  const {
    select: select_style,
    'sub-menu': subMenu_style,
    dark: dark_style,
    active: active_style,
  } = styles;
  useLayoutEffect(() => {
    handleGetOptionIdx(currOption);
  }, [currOption]);
  return (
    <div
      className={clsx(select_style, {
        [dark_style]: theme,
        [active_style]: active,
      })}
      onClick={() => setActive(!active)}
    >
      <p>{lable}</p>
      <i className="fa-light fa-angle-down"></i>
      <ul className={subMenu_style}>
        {options.map((option, idx) => (
          <li
            onClick={() => {
              setCurrOption(option);
            }}
            key={idx}
          >
            <span>{option.name}</span>
            <span>{option.sdt}</span>
            <p>{option.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(SelectAddress);
