import React, { Component } from 'react';
import WeaponList from 'components/list/WeaponList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';

class WeaponListContainer extends Component {
  render() {
    const {weaponWheres} = this.props;
    return (
      <WeaponList weaponWheres={weaponWheres}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponWheres: state.weapon.toJS().weaponWheres
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponListContainer);