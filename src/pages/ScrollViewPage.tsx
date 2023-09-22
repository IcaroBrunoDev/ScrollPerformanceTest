import React from 'react';
import {ScrollView, View} from 'react-native';
import Card from '../components/Card';

import ActionSheet from '../components/ActionSheet';
import Button from '../components/Button';
import {data} from '../mocks/data-mock';

const ScrollViewPage: React.FC = () => {
  const [openSheet, setOpenSheet] = React.useState<boolean>(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        {data.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </ScrollView>

      <Button text="Open ActionSheet" onPress={() => setOpenSheet(true)} />

      {openSheet && <ActionSheet onClose={() => setOpenSheet(false)} />}
    </View>
  );
};

export default ScrollViewPage;
