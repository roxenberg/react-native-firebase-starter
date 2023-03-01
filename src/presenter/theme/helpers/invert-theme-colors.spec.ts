import {mixInvertedTheme} from './invert-theme-colors';

describe('mixInvertedTheme', () => {
  test('should return a mixed theme', () => {
    const selectedTheme = {
      primary: '#000',
      secondary: '#111',
    };
    const invertedTheme = {
      primary: '#fff',
      secondary: '#eee',
    };

    // @ts-ignore
    const mixedTheme = mixInvertedTheme(selectedTheme, invertedTheme);
    expect(mixedTheme).toEqual({
      primary: '#000',
      secondary: '#111',
      'primary-inverted': '#fff',
      'secondary-inverted': '#eee',
    });
  });
});
