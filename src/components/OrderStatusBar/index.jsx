import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import orderStatus from '../../constants/orderStatus';

const OrderStatusBar = ({selected}) => {
  const Block = ({selected, curr}) => {
    return (
      <View style={[styles.block, selected === curr && styles.selectedBlock]}>
        <Text
          style={
            selected === curr ? styles.selectedText : styles.unselectedText
          }>
          {curr}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {Object.keys(orderStatus).map(status => {
        return (
          <Block key={status} selected={selected} curr={orderStatus[status]} />
        );
      })}
    </View>
  );
};

export default OrderStatusBar;
