import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 18,
  },
  logo: {
    width: 64,
    height: 80,
    marginTop: 30,
    marginBottom: 20,

    
  },
  title1: {
    fontSize: 38,
    fontWeight: '700',
    color: 'black',
    font:"Poppins",
    fontWieght:"bold",
    lineHeight: 45,
  },
  title2: {
    fontSize: 32,
    fontWeight: '300',
    font:"Poppins",
    color: 'black',
    lineHeight: 45,
    marginBottom: 22,
  },
  driver:{
    alignItems:'flex-start',
    width: 50,
    height: 64,
  },
  rider:{
    alignItems:'flex-start',
    width:154,
    height:244,
  },
});

export default styles;
