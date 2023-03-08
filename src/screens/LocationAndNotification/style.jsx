import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../constants/constants';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  slogan: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.18,
    textAlign: 'center',
    fontSize: 38,
    fontWeight: '800',
  },
  img: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.32,
    left: SCREEN_WIDTH * 0.1,
    width: 353,
    height: 350,
  },
  img1: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.32,
    left: SCREEN_WIDTH * 0.2,
    width: 228.768,
    height: 291.168,
  },
  tip: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.75,
    fontSize: 17,
    textAlign: 'center',
  },
  btn: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.75,
    textAlign: 'center',
  },
  btn1: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.9,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
