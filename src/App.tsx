import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './themes';
import AppView from './AppView';

export default function App() {
  return (
    <SafeAreaProvider style={{justifyContent: 'center'}}>
      <ThemeProvider>
        <AppView />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
