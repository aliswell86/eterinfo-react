import React, { Component } from 'react';
import WeaponWhereBox from 'components/wherebox/WeaponWhereBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';

class WeaponWhereBoxContainer extends Component {

  getWeaponList = () => {
    const {WeaponActions, weaponWhere} = this.props;
    WeaponActions.getWeaponList(weaponWhere);
  }

  componentDidMount() {
    this.getWeaponList();
  }

  handleWhereSet = (e) => {    
    const {name, value, checked} = e.target;
    const {WeaponActions, weapons} = this.props;

    if(name === 'clyn' || name === 'illegal') {
      WeaponActions.setWeaponWhere({name, value});
    }else{
      WeaponActions.setWeaponWhere({name, checked});
    }
    
    if(weapons.length > 0) {
      WeaponActions.getWeaponWhereList();
    }else{
      this.getWeaponList();
    }
  }

  render() {
    const {handleWhereSet} = this;
    const {loading} = this.props;

    return (
      <WeaponWhereBox handleWhereSet={handleWhereSet} loading={loading}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponWhere: state.weapon.toJS().weaponWhere,
    weapons: state.weapon.toJS().weapons,
    loading: state.pender.pending['weapon/GET_WEAPON_LIST']
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponWhereBoxContainer);