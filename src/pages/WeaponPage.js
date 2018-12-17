import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponList from 'components/list/WeaponList';

const WeaponPage = () => {
  return (
    <PageTemplate>
      <ListWrapper>
        <WeaponList/>
      </ListWrapper>      
    </PageTemplate>
  )
}

export default WeaponPage;