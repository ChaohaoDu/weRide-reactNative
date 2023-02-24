import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 38,
  },
  logo: {
    width: 64,
    height: 64,
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
    lineHeight: 45,
    marginBottom: 22,
  },
  loginBtn: {
    color: '#FE8E67',
    fontWeight: '700',
  },
  
  buttonText: {
    fontSize: 100,
    color: 'orange',
    lineHeight: 50,
  },
  agreement: {
    fontSize: 12,
    color: '#252525',

    position: 'absolute',
    height: 36,
    left: 41,
    top: 623,
  },
  hyperlink: {
    color: '#4A73DA',
  },
  btn: {
    position: 'absolute',
    top: 550,
    left: 38,
  },
  container: {  //todo
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  leftText: {
    font:"Poppins",
    textAlign: 'left',
    fontSize: 11,
  },
  rightText: {
    font:"Poppins",
    textAlign: 'right',
    fontSize: 11,
  },
});

export default styles;