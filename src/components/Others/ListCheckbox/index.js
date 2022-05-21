import clsx from 'clsx';
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Checkbox } from '../../index';
import styles from './list-checkbox.module.scss';

function ListCheckbox({ list, title }) {
  const [hidden, setHidden] = useState(false);
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'box-filter': boxFilter_style,
    'filter-title': filterTitle_style,
    dark: dark_style,
    hidden: hidden_style,
  } = styles;
  return (
    <React.Fragment>
      <div
        className={clsx(filterTitle_style, { [dark_style]: theme })}
        href="#"
      >
        <h3>{title}</h3>
        {hidden ? (
          <i className="fa fa-add" onClick={() => setHidden(!hidden)}></i>
        ) : (
          <i className="fa fa-minus" onClick={() => setHidden(!hidden)}></i>
        )}
      </div>
      <ul className={clsx(boxFilter_style, { [hidden_style]: hidden })}>
        {list.map((item) => (
          <li key={item._id}>
            <Checkbox lable={item.name}></Checkbox>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default memo(ListCheckbox);
