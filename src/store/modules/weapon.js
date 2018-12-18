import {createAction, handleActions} from 'redux-actions';
import {Map/*, List, fromJS*/} from 'immutable';
// import {pender} from 'redux-pender';

const SET_WEAPON_WHERE = 'weapon/SET_WEAPON_WHERE';

export const setWeaponWhere = createAction(SET_WEAPON_WHERE);

const initialState = Map({
  weaponWhere: Map({
    isCl: false
  })
});

export default handleActions({
  [SET_WEAPON_WHERE]: (state, action) => {
    const {name, value} = action.payload;
    return state.set(['weaponWhere', name], value);
  }
}, initialState);