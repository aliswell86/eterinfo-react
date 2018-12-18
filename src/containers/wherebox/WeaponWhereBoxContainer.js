import React, { Component } from 'react';
import WeaponWhereBox from 'components/wherebox/WeaponWhereBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';

class WeaponWhereBoxContainer extends Component {

  whereSet = (e) => {    
    const {name, checked} = e.target;
    const {WeaponActions} = this.props;
    WeaponActions.setWeaponWhere({name, checked});
  }

  render() {
    const {whereSet} = this;

    return (
      <WeaponWhereBox whereSet={whereSet} />
    );
  }
}

export default connect(
  (state) => ({
    weaponWhere: state.weapon.get('weaponWhere')
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponWhereBoxContainer);