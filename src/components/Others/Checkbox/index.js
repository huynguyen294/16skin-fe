import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './checkbox.module.scss';

function Checkbox({ lable, checked }) {
  const [active, setActive] = useState(false);
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'checkbox-icon': checkboxIcon_style,
    checkbox: checkbox_style,
    active: active_style,
    dark: dark_style,
  } = styles;

  useEffect(() => {
    setActive(checked);
  }, [checked]);

  return (
    <div
      className={clsx(checkbox_style, {
        [active_style]: active,
        [dark_style]: theme,
      })}
      onClick={() => setActive(!active)}
    >
      <div className={checkboxIcon_style}>
        <i className="fa-solid fa-check"></i>
      </div>
      <p>{lable}</p>
    </div>
  );
}

export default memo(Checkbox);
