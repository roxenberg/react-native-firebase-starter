import React from 'react';
import {Text} from '../../components/text';
import {ThemeProvider} from '../../theme';

export const Main = () => {
  return (
    <ThemeProvider>
      <Text>Test</Text>
    </ThemeProvider>
  );
};
