import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Favorite: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <TouchableOpacity onPress={() => setIsChecked(prev => !prev)}>
      {isChecked ? (
        <Icon name="heart" color="red" size={20} />
      ) : (
        <Icon name="heart-outline" color="#000" size={20} />
      )}
    </TouchableOpacity>
  );
};

export default Favorite;
