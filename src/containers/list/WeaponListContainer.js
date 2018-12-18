import React, { Component } from 'react';
import WeaponList from 'components/list/WeaponList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';

class WeaponListContainer extends Component {
  render() {
    const {weapons} = this.props;

    return (
      <WeaponList weapons={weapons}/>
    );
  }
}

export default connect(
  (state) => ({
    weapons: state.weapon.toJS().weapons
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponListContainer);