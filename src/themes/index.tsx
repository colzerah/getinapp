/* eslint-disable react/jsx-no-constructed-context-values */
import React, {useState, createContext, useCallback} from 'react';

import {DefaultTheme, ThemeProvider as StyledProvider} from 'styled-components';
import defaultTheme from './lightTheme';
import darkTheme from './darkTheme';

interface IThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? darkTheme : defaultTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
