import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonProps {
  route: string;
}

const Button: React.FC<ButtonProps> = ({route}) => {
  const {navigate}: any = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigate(route)}>
      <Text style={styles.buttonText}>{route}</Text>
    </TouchableOpacity>
  );
};

const Dashboard: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Button route="ScrollViewPage" />
      <Button route="FlatListPage" />
      {/* <Button route="FlashListPage" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 60,
    marginBottom: 20,
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
  },
});

export default Dashboard;
