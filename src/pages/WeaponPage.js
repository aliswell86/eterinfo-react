import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponList from 'components/list/WeaponList';
import WeaponWhereBox from 'components/wherebox/WeaponWhereBox';

const WeaponPage = () => {
  return (
    <PageTemplate>
      <WeaponWhereBox/>
      <ListWrapper>        
        <WeaponList/>
      </ListWrapper>      
    </PageTemplate>
  )
}

export default WeaponPage;