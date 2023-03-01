import dark from '../palette/dark.json';
import {ThemeColors, ThemeColorsInverted} from '../types';

export function mixInvertedTheme(
  selectedTheme: typeof dark,
  invertedTheme: typeof dark,
): ThemeColors & ThemeColorsInverted {
  // @ts-ignore
  const invertedColors: ThemeColorsInverted = {};
  Object.entries(invertedTheme).forEach(entry => {
    // @ts-ignore
    invertedColors[`${entry[0]}-inverted`] = entry[1];
  });

  return Object.assign(selectedTheme, invertedColors);
}
