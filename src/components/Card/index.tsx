import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import type {Places} from '../../types/Places';

import Favorite from './Favorite';
import Ratings from './Ratings';

const Card: React.FC<Places> = ({company}) => {
  const formattedCurrency = React.useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(company.deliveryTax);
  }, [company]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.profilePicture}>
        <Image
          style={{width: 60, height: 60}}
          source={{uri: company.profilePicture}}
        />
      </View>
      <View style={styles.infosWrapper}>
        <View style={styles.infosContainer}>
          <Text style={{...styles.textBase, ...styles.title}}>
            {company.name}
          </Text>
        </View>
        <View style={styles.infosContainer}>
          <Ratings ratings={company.ratings} />
          <Text
            style={{
              ...styles.divider,
              ...styles.textBase,
              fontWeight: '600',
            }}>
            ⚬ {company.foodType} ⚬
          </Text>
          <Text style={styles.textBase}>2 km</Text>
        </View>
        <View style={styles.infosContainer}>
          <Text style={styles.textBase}>{company.deliveryTime} min</Text>
          <Text style={styles.divider}>⚬</Text>
          <Text style={styles.textBase}>{formattedCurrency}</Text>
        </View>
      </View>
      <Favorite />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infosWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  infosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 0.3,
    borderColor: '#000',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  textBase: {
    color: '#000',
    fontSize: 12,
  },
  divider: {
    color: '#000',
    marginHorizontal: 5,
  },
});

export default Card;
