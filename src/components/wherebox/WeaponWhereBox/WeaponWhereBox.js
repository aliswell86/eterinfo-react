import React from 'react';
import styles from './WeaponWhereBox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const WeaponWhereBox = () => {
  return (
    <div className={cx('weapon-where-box')}>
      <div className={cx('cl-where')}>
        <div>CL</div>
        <div>일반</div>
      </div>
      <div className={cx('weapon-illegal-where')}>
        <div>합법</div>
        <div>불법</div>
      </div>
      <div className={cx('weapon-type-where')}>
        <div>근거리</div>
        <div>원거리</div>
      </div>
      <div className={cx('grade-where')}>
        <div>1등급</div>
        <div>2등급</div>
        <div>4등급</div>
        <div>5등급</div>
        <div>6등급</div>
        <div>7등급</div>
        <div>8등급</div>
        <div>9등급</div>
        <div>10등급</div>
        <div>11등급</div>
        <div>12등급</div>
      </div>
    </div>
  );
};

export default WeaponWhereBox;