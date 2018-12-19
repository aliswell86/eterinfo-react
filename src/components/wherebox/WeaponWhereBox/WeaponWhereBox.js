import React from 'react';
import styles from './WeaponWhereBox.scss';
import classNames from 'classnames/bind';

import { Checkbox, Radio } from 'antd';
const RadioGroup = Radio.Group;

const cx = classNames.bind(styles);

const WeaponWhereBox = ({handleWhereSet, weaponWhere, weaponList}) => {
  
  return (
    <div className={cx('weapon-where-box')}>
      <div className={cx('cl-where')}>
        <RadioGroup className={cx('clyn')} name='clyn' onChange={handleWhereSet}>
          <div><Radio value=''>전체</Radio></div>
          <div><Radio value='Y'>CL</Radio></div>
          <div><Radio value='N'>NonCL</Radio></div>
        </RadioGroup>
      </div>
      <div className={cx('weapon-illegal-where')}>
        <RadioGroup className={cx('illegal')} name='illegal' onChange={handleWhereSet}>
          <div><Radio value='' onChange={handleWhereSet}>전체</Radio></div>
          <div><Radio value='Y' onChange={handleWhereSet}>불법</Radio></div>
          <div><Radio value='N' onChange={handleWhereSet}>합법</Radio></div>
        </RadioGroup>
      </div>
      <div className={cx('weapon-type-where')}>
        <div className={cx('weapon-type1')}>
          <div><Checkbox name="isType1" onChange={handleWhereSet}>저격소총</Checkbox></div>
          <div><Checkbox name="isType2" onChange={handleWhereSet}>돌격소총</Checkbox></div>
          <div><Checkbox name="isType3" onChange={handleWhereSet}>기관총</Checkbox></div>
          <div><Checkbox name="isType4" onChange={handleWhereSet}>중화기</Checkbox></div>
          <div><Checkbox name="isType5" onChange={handleWhereSet}>지원화기</Checkbox></div>
          <div><Checkbox name="isType6" onChange={handleWhereSet}>샷건</Checkbox></div>
          <div><Checkbox name="isType7" onChange={handleWhereSet}>권총</Checkbox></div>
          <div><Checkbox name="isType8" onChange={handleWhereSet}>기관단총</Checkbox></div>
          <div><Checkbox name="isType9" onChange={handleWhereSet}>특수화기</Checkbox></div>
        </div>
        <div className={cx('weapon-type2')}>
          <div><Checkbox name="isType10" onChange={handleWhereSet}>도검</Checkbox></div>
          <div><Checkbox name="isType11" onChange={handleWhereSet}>둔기</Checkbox></div>
          <div><Checkbox name="isType12" onChange={handleWhereSet}>도끼</Checkbox></div>
          <div><Checkbox name="isType13" onChange={handleWhereSet}>장창</Checkbox></div>
          <div><Checkbox name="isType14" onChange={handleWhereSet}>미늘창</Checkbox></div>
        </div>
      </div>
      <div className={cx('grade-where')}>
        <div><Checkbox name="isTier1" onChange={handleWhereSet}>1등급</Checkbox></div>
        <div><Checkbox name="isTier2" onChange={handleWhereSet}>2등급</Checkbox></div>
        <div><Checkbox name="isTier3" onChange={handleWhereSet}>3등급</Checkbox></div>
        <div><Checkbox name="isTier4" onChange={handleWhereSet}>4등급</Checkbox></div>
        <div><Checkbox name="isTier5" onChange={handleWhereSet}>5등급</Checkbox></div>
        <div><Checkbox name="isTier6" onChange={handleWhereSet}>6등급</Checkbox></div>
        <div><Checkbox name="isTier7" onChange={handleWhereSet}>7등급</Checkbox></div>
        <div><Checkbox name="isTier8" onChange={handleWhereSet}>8등급</Checkbox></div>
        <div><Checkbox name="isTier9" onChange={handleWhereSet}>9등급</Checkbox></div>
        <div><Checkbox name="isTier10" onChange={handleWhereSet}>10등급</Checkbox></div>
        <div><Checkbox name="isTier11" onChange={handleWhereSet}>11등급</Checkbox></div>
        <div><Checkbox name="isTier12" onChange={handleWhereSet}>12등급</Checkbox></div>
      </div>
    </div>
  );
};

export default WeaponWhereBox;