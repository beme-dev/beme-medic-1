import React, { FC } from 'react';
import { TextInput as RnT, View } from 'react-native';
import { IconSearch } from '../atoms';

type Props = {};

export const TextInput: FC<Props> = ({}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 9999,
        height: 56,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 3,
      }}
    >
      <IconSearch width={24} height={24} style={{ marginRight: 15 }} />
      <RnT style={{}} placeholder='Search here...'></RnT>
    </View>
  );
};
