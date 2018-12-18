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
    const {name, checked} = e.target;
    const {WeaponActions} = this.props;
    WeaponActions.setWeaponWhere({name, checked});
  }

  render() {
    const {handleWhereSet} = this;
    const {weaponWhere, weaponList} = this.props;

    return (
      <WeaponWhereBox 
        handleWhereSet={handleWhereSet}
        weaponWhere={weaponWhere}
        weaponList={weaponList}
        />
    );
  }
}

export default connect(
  (state) => ({
    weaponWhere: state.weapon.toJS().weaponWhere,
    weaponList: state.weapon.toJS().weaponList
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponWhereBoxContainer);