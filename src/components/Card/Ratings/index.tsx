import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

interface RatingsProps {
  readonly ratings: number;
}

const Ratings: React.FC<RatingsProps> = ({ratings}) => {
  return (
    <View style={styles.ratingsWrapper}>
      <Icon name="star" size={10} color="#EEAD2D" />
      <Text style={styles.textBase}>{ratings}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    fontSize: 12,
    color: '#EEAD2D',
    marginLeft: 2,
  },
});

export default Ratings;
