import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

import CascadingMenu from 'components/common/antd/CascadingMenu';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('brand')}>
          <Link to="/">이터인포.kr</Link>
        </div>
        <div className={cx('right')}>
          <CascadingMenu/>
        </div>
      </div>
    </header>
  );
};

export default Header;