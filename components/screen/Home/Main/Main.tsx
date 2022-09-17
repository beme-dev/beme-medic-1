import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { Card, CardProps } from './Card';
import { Categories } from './Categories';

type Props = {};

const data: CardProps[] = [
  {
    job: 'Dentist',
    name: 'Javier Hernandez',
    title: 'Dr.',
    note: 4.2,
  },
  {
    job: 'General Doctor',
    name: 'Xana Azandé',
    title: 'Dr.',
    note: 4.7,
  },
  {
    job: 'Neurosurgeon',
    name: 'Astrid Karembeu',
    title: 'Dr./PhD',
    note: 4.1,
  },
];

export const Main: FC<Props> = ({}) => {
  return (
    <View style={{ width: '90%' }}>
      <Categories />
      <View>
        <FlatList
          nestedScrollEnabled
          style={{ width: '100%', height: 225 }}
          data={data}
          renderItem={({ item }) => <Card {...item} />}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          contentContainerStyle={{ paddingBottom: 30, paddingTop: 5 }}
        />
      </View>
    </View>
  );
};
