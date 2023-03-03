import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../constants/constants';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  skip: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: '600',
    top: 20,
    right: 20,
  },
  logo: {
    position: 'absolute',
    width: 50,
    height: 64,
    top: SCREEN_HEIGHT * 0.0567,
  },
  slogan: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.25,
    textAlign: 'center',
    fontSize: 38,
    fontWeight: '800',
  },
  driverOne: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.34,
    left: SCREEN_WIDTH * 0.05,
    width: 425,
    height: 323,
  },
  driverTwo: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.40,
    left: SCREEN_WIDTH * 0.05,
    width: 336,
    height: 252,
  },
  tip: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 17,
    top: SCREEN_HEIGHT * 0.75,
  },
  rightArrow: {
    position: 'absolute',
    fontSize: 40,
    color: '#172B54',
    top: SCREEN_HEIGHT * 0.85,
    right: SCREEN_WIDTH * 0.06,
  },
  dot: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.93,
    position: 'absolute',
    flexDirection: 'row',
  },
  dotOne: {
    position: 'absolute',
    color: '#171616',
    right: -SCREEN_WIDTH * 0.03,
    fontSize: 40,
  },
  dotTwo: {
    position: 'absolute',
    color: '#D9D9D9',
    left: -SCREEN_WIDTH * 0.03,
    fontSize: 40,
  },
  dotTwo1: {
    position: 'absolute',
    color: '#171616',
    left: -SCREEN_WIDTH * 0.03,
    fontSize: 40,
  },
});

export default styles;
