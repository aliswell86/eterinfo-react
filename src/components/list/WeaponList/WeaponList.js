import React from 'react';
import styles from './WeaponList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const WeaponObject = () => {
  return (
    <div className={cx('weapon-object')}>
      <div className={cx('weapon-img')}>
        <img src="http://image.mgame.com/mgamezzang/games/eternalcity_cms/attack/159.gif"/>
      </div>
      <div className={cx('weapon-upgrade-name')}>MAX +8</div>
      <div className={cx('weapon-name')}>[CL] FN SCAR-H EGLM/AntiTank</div>
      <div className={cx('weapon-damage')}>3,990,000</div>
      <div className={cx('option-btn')}>
        <div>드롭다운 몸체</div>
        <div>드롭다운 강화</div>
      </div>
    </div>
  );
}

const WeaponList = () => {
  const wpItemList = <WeaponObject/>;

  return (
    <div className={cx('weapon-list')}>
      {wpItemList}
      {wpItemList}
      {wpItemList}
      {wpItemList}
      {wpItemList}
      {wpItemList}
      {wpItemList}
    </div>
  )
};

export default WeaponList;
