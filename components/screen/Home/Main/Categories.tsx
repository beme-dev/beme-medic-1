import { FC } from 'react';
import { Text, View } from 'react-native';

type Props = {};

export const Categories: FC<Props> = ({}) => {
  return (
    <View style={{ paddingTop: 24, marginBottom: 30 }}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 20,
        }}
      >
        Categories
      </Text>
      <View>{/* TODO add List */}</View>
    </View>
  );
};

