import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';

import Routes from './routes';

function AppView(): JSX.Element {
  return (
    <>
      <StatusBar
        hidden
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Routes />
    </>
  );
}

export default AppView;
