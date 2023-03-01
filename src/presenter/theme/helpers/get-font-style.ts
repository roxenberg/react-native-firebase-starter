import EStyleSheet from 'react-native-extended-stylesheet';
import {typography} from '../../theme';

export function getFontStyle(
  font?: keyof typeof typography,
): (typeof typography)[keyof typeof typography] | null {
  if (font && font in typography) {
    let letterSpacing;
    if ('letterSpacing' in typography[font]) {
      // @ts-ignore
      letterSpacing = typography[font].letterSpacing;
    }

    return {
      ...typography[font],
      fontSize: EStyleSheet.value(typography[font].fontSize) as any,
      lineHeight: EStyleSheet.value(typography[font].lineHeight) as any,
      // @ts-ignore letterSpacing: EStyleSheet.value(typography[font].letterSpacing),
      letterSpacing:
        'letterSpacing' in typography[font]
          ? (EStyleSheet.value(letterSpacing) as number)
          : undefined,
    };
  } else {
    return null;
  }
}
