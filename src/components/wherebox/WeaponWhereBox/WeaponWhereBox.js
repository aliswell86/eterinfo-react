import React from 'react';
import styles from './WeaponWhereBox.scss';
import classNames from 'classnames/bind';

import { Checkbox } from 'antd';

const cx = classNames.bind(styles);

const WeaponWhereBox = ({handleWhereSet, weaponWhere, weaponList}) => {
  
  return (
    <div className={cx('weapon-where-box')}>
      <div className={cx('cl-where')}>
        <div><Checkbox name="isCl" onChange={handleWhereSet}>CL</Checkbox></div>
        <div><Checkbox name="isNonCl" onChange={handleWhereSet}>NonCL</Checkbox></div>
      </div>
      <div className={cx('weapon-illegal-where')}>
        <div><Checkbox>합법</Checkbox></div>
        <div><Checkbox>불법</Checkbox></div>
      </div>
      <div className={cx('weapon-type-where')}>
        <div className={cx('weapon-type1')}>
          <div><Checkbox>저격소총</Checkbox></div>
          <div><Checkbox>돌격소총</Checkbox></div>
          <div><Checkbox>기관총</Checkbox></div>
          <div><Checkbox>중화기</Checkbox></div>
          <div><Checkbox>지원화기</Checkbox></div>
          <div><Checkbox>샷건</Checkbox></div>
          <div><Checkbox>권총</Checkbox></div>
          <div><Checkbox>기관단총</Checkbox></div>
          <div><Checkbox>특수화기</Checkbox></div>
        </div>
        <div className={cx('weapon-type2')}>
          <div><Checkbox>도검</Checkbox></div>
          <div><Checkbox>둔기</Checkbox></div>
          <div><Checkbox>도끼</Checkbox></div>
          <div><Checkbox>장창</Checkbox></div>
          <div><Checkbox>미늘창</Checkbox></div>
        </div>
      </div>
      <div className={cx('grade-where')}>
        <div><Checkbox>1등급</Checkbox></div>
        <div><Checkbox>2등급</Checkbox></div>
        <div><Checkbox>4등급</Checkbox></div>
        <div><Checkbox>5등급</Checkbox></div>
        <div><Checkbox>6등급</Checkbox></div>
        <div><Checkbox>7등급</Checkbox></div>
        <div><Checkbox>8등급</Checkbox></div>
        <div><Checkbox>9등급</Checkbox></div>
        <div><Checkbox>10등급</Checkbox></div>
        <div><Checkbox>11등급</Checkbox></div>
        <div><Checkbox>12등급</Checkbox></div>
      </div>
    </div>
  );
};

export default WeaponWhereBox;