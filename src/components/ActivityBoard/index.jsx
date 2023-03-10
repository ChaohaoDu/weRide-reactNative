import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActivityBoard = () => {
  const UserInfo = () => {
    return (
      <View style={styles.userInfo}>
        <View style={styles.flexContainer}>
          <Image
            source={require('../../assets/images/avatar-temp.png')}
            style={styles.avatar}
          />

          <View>
            <Text>Aly Wang</Text>
            <Text>
              <MaterialIcons size={13} name={'star-rate'} color={'#FCBD2A'} />{' '}
              4.8
            </Text>
          </View>
        </View>

        <View style={styles.flexContainer}>
          <View>
            <Text style={styles.cost}>Cost</Text>
            <Text style={styles.princeOrTime}>$7.27</Text>
          </View>
          <View style={styles.lookUp}>
            <AntDesign name={'right'} />
          </View>
        </View>
      </View>
    );
  };

  const TripRow = () => {
    return (
      <View style={styles.rowContainer}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons name={'location-sharp'} color={'#000'} size={20} />
          <Text style={styles.address}>4545 La Jolla Village Dr</Text>
        </View>
        <Text>8:30 AM</Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <UserInfo />
      <View style={styles.tripInfo}>
        <TripRow />
        <TripRow />
      </View>
    </View>
  );
};

export default ActivityBoard;
