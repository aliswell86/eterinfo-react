import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const SET_WEAPON_WHERE = 'weapon/SET_WEAPON_WHERE';
const GET_WEAPON_LIST = 'weapon/GET_WEAPON_LIST';

export const setWeaponWhere = createAction(SET_WEAPON_WHERE);
export const getWeaponList = createAction(GET_WEAPON_LIST, api.getWeaponList);

const initialState = Map({
  weaponWhere: Map({
    isCl: false,
    isNonCl: false
  }),
  weapons: List()
});

export default handleActions({
  [SET_WEAPON_WHERE]: (state, action) => {
    const {name, checked} = action.payload;
    return state.setIn(['weaponWhere', name], checked);
  },
  ...pender({
    type: GET_WEAPON_LIST,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;
      return state.set('weapons', fromJS(items));
    }
  })
}, initialState);