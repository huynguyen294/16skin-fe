import clsx from 'clsx';
import { memo } from 'react';
import styles from './star.module.scss';

function Star({ numOfStar = 5, size = 'md' }) {
  const fill_style = 'fas fa-star';
  const unFill_style = 'fat fa-star';
  const { star: star_style, sm: sm_style, md: md_style, lg: lg_style } = styles;
  var fill = [];
  if (numOfStar === 1) {
    fill = [true, false, false, false, false];
  } else if (numOfStar === 2) {
    fill = [true, true, false, false, false];
  } else if (numOfStar === 3) {
    fill = [true, true, true, false, false];
  } else if (numOfStar === 4) {
    fill = [true, true, true, true, false];
  } else if (numOfStar === 5) {
    fill = [true, true, true, true, true];
  }
  return (
    <div className={star_style}>
      <i
        className={clsx({
          [fill_style]: fill[0],
          [unFill_style]: !fill[0],
          [sm_style]: size === 'sm',
          [md_style]: size === 'md',
          [lg_style]: size === 'lg',
        })}
      ></i>
      <i
        className={clsx({
          [fill_style]: fill[1],
          [unFill_style]: !fill[1],
          [sm_style]: size === 'sm',
          [md_style]: size === 'md',
          [lg_style]: size === 'lg',
        })}
      ></i>
      <i
        className={clsx({
          [fill_style]: fill[2],
          [unFill_style]: !fill[2],
          [sm_style]: size === 'sm',
          [md_style]: size === 'md',
          [lg_style]: size === 'lg',
        })}
      ></i>
      <i
        className={clsx({
          [fill_style]: fill[3],
          [unFill_style]: !fill[3],
          [sm_style]: size === 'sm',
          [md_style]: size === 'md',
          [lg_style]: size === 'lg',
        })}
      ></i>
      <i
        className={clsx({
          [fill_style]: fill[4],
          [unFill_style]: !fill[4],
          [sm_style]: size === 'sm',
          [md_style]: size === 'md',
          [lg_style]: size === 'lg',
        })}
      ></i>
    </div>
  );
}

export default memo(Star);
