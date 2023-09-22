import React from 'react';
import {FlatList, View} from 'react-native';
import Card from '../components/Card';

import ActionSheet from '../components/ActionSheet';
import Button from '../components/Button';
import {data} from '../mocks/data-mock';

const FlatListPage: React.FC = () => {
  const [openSheet, setOpenSheet] = React.useState<boolean>(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Card {...item} />}
      />

      <Button text="Open ActionSheet" onPress={() => setOpenSheet(true)} />

      {openSheet && <ActionSheet onClose={() => setOpenSheet(false)} />}
    </View>
  );
};

export default FlatListPage;
