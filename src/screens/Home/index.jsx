import React, {useState} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {deleteJWToken} from '../../utils/jwt';
import {AuthContext} from '../../navigation/navigation';
import styles from './style';
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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = image => {
    setSelectedImage(image);
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={logoUrl} style={styles.logo} />
        <Text style={styles.title1}>Choose</Text>
        <Text style={styles.title2}>Your Role</Text>
        <RoleContainer pictureURL={driverURL} role={'Drive'} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
