import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'gray',
      overflow: 'hidden',
      marginBottom: 20,
    },
    selectedContainer: {
      borderColor: 'blue',
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
    
    },
    swooshContainer: {
      position: 'absolute',
      top: -30,
      left: 0,
      right: 0,
      alignItems: 'flex-start',
    },
    swoosh: {
      height: 30,
      width: '50%',
      backgroundColor: 'blue',
      transform: [{ rotate: '45deg' }],
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',

      padding: 10,
    },
  });