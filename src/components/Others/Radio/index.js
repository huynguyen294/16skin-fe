import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './radio.module.scss';

function Radio({ getRadio, name, active }) {
  const { theme } = useSelector((state) => state.UIStore);
  const { radio: radio_style, active: active_style, dark: dark_style } = styles;
  const [radio, setRadio] = useState({ active: false, name: name });

  useEffect(() => {
    if (radio.active) {
      getRadio(radio);
    }
  }, [radio]);
  return (
    <div
      onClick={() => setRadio({ ...radio, active: true })}
      className={clsx(radio_style, {
        [active_style]: active,
        [dark_style]: theme,
      })}
    >
      <div></div>
    </div>
  );
}

export default memo(Radio);
