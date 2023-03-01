import './AsyncStorage';
import './react-native.animated';
import EStyleSheet from 'react-native-extended-stylesheet';
// import FastImage from 'react-native-fast-image';
import {DARK_THEME_COLORS} from '../src/presenter/theme';

beforeAll(() => {
  EStyleSheet.build({
    $rem: 1,
    $theme: 'dark',
    ...DARK_THEME_COLORS,
  });
});

jest.spyOn(Date, 'now').mockImplementationOnce(() => 1597053325489);

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
