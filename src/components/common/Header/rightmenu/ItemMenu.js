import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import {Link} from 'react-router-dom';

// const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item><Link to="/item/wp">무기</Link></Menu.Item>
    <Menu.Item>방어구</Menu.Item>
    {/* <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu> */}
    {/* <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu> */}
  </Menu>
);

const ItemMenu = () => (
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      아이템정보 <Icon type="down" />
    </a>
  </Dropdown>
);

export default ItemMenu;