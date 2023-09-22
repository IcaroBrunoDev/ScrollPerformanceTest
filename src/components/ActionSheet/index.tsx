import React from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  View,
} from 'react-native';
import Button from '../Button';

const windowWidth = Dimensions.get('window').width;

interface ActionSheetProps {
  onClose: (event: GestureResponderEvent) => void;
}

const ActionSheet: React.FC<ActionSheetProps> = ({onClose}) => {
  return (
    <View style={styles.sheetWrapper}>
      <Button text="Close ActionSheet" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  sheetWrapper: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    height: 300,
    backgroundColor: '#fff',
    elevation: 3,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(ActionSheet);
