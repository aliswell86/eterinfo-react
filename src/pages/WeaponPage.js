import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponList from 'components/list/WeaponList';
import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';

const WeaponPage = () => {
  return (
    <PageTemplate>
      <WeaponWhereBoxContainer/>
      <ListWrapper>        
        <WeaponList/>
      </ListWrapper>      
    </PageTemplate>
  )
}

export default WeaponPage;