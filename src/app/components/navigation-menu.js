import React from 'react';
import List from './list';
import IconButton from './icon-button';

import * as mockData from '../../../mockNavData.json';

const NavigationMenu = (navigationItems) => {
  const { navigation } = mockData;
  return (
    <amp-sidebar id="sidebar" layout="nodisplay" side="right">
      <IconButton
        onProps="tap:sidebar.close"
        icon="closeIconKiev"
        customStyles={{
          margin: '0.5em',
        }}
      />
      <List listItems={navigation.hasPart.parts} />
    </amp-sidebar>
  );
};

export default NavigationMenu;
