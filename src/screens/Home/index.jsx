import React, {useState} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {deleteJWToken} from '../../utils/jwt';
import {AuthContext} from '../../navigation/navigation';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../components/LongButton';
import RoleContainer from '../../components/RoleContainer';

const Home = () => {
  const auth = React.useContext(AuthContext);
  const logoUrl = require('../../assets/images/logo/logo_text_at_bottom.png');
  const driverURL = require('../../assets/images/choose_your_role/driver.png');
  const riderURL = require('../../assets/images/choose_your_role/rider.png');
  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [riderSelected, setRiderSelected] = useState(false);
  const [driverSelected, setDriverSelected] = useState(false);
  const handleImagePress = image => {
    setSelectedImage(image);
  };
  const {width} = Dimensions.get('window');

  const Container = ({imageSource, label, onSelect, isSelected}) => {
    const handlePress = () => {
      onSelect();
    };

    return (
      <TouchableOpacity
        style={[styles.container, isSelected && styles.selectedContainer]}
        onPress={handlePress}
        disabled={isSelected}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  };
  // selectedContainer
  const ComponentContainer = () => {
    const [riderSelected, setRiderSelected] = useState(false);
    const [driverSelected, setDriverSelected] = useState(false);
    const handleRiderSelect = () => {
      setRiderSelected(true);
      setDriverSelected(false);
    };
    const handleDriverSelect = () => {
      setRiderSelected(false);
      setDriverSelected(true);
    };
    return (
      <View style={styles.containerWrapper}>
        <Container
          imageSource={require('../../assets/images/choose_your_role/rider.png')}
          label="Rider"
          onSelect={handleRiderSelect}
          isSelected={riderSelected}
        />
        <Container
          imageSource={require('../../assets/images/choose_your_role/driver.png')}
          label="Driver"
          onSelect={handleDriverSelect}
          isSelected={driverSelected}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={logoUrl} style={styles.logo} />
        <Text style={styles.title1}>Choose</Text>
        <Text style={styles.title2}>Your Role</Text>
        <View style={styles.containerWrapper}>
          <ComponentContainer
            imageSource={require('../../assets/images/choose_your_role/rider.png')}
            label="Rider"
            onSelect={setRiderSelected}
          />
          <ComponentContainer
            imageSource={require('../../assets/images/choose_your_role/driver.png')}
            label="Driver"
            onSelect={setDriverSelected}
          />
        </View>
        <LongBottom
          onPress={() => {
            navigation.navigate('OnBoarding');
          }} //Todo verify login infos
          // disabled={btnDisabled}
          text={'Login'}
          otherStyle={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
