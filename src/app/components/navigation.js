import React from 'react';
import Logo from './logo';
import List from './list';

import * as mockData from '../../../mockNavData.json';

const Navigation = (props) => {
  props = mockData;
  return (
    <nav>
      <Logo />
      <List listItems={props.navigation.hasPart.parts} />
    </nav>
  );
};

export default Navigation;
