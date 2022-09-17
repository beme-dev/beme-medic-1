import { FC } from 'react';
import { Text, View } from 'react-native';
import { IconNotifications } from '../../atoms';
import { TextInput } from '../../molecules';
import { Main } from './Main';

type Props = {};

export const HomeScreen: FC<Props> = ({}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: '#51A8FF',
          borderRadius: 32,
          height: 323,
          width: '100%',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 64,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            marginBottom: 8,
          }}
        >
          <Text style={{ color: 'white' }}>Hi, Steven</Text>
          <IconNotifications width={51} height={51} />
        </View>
        <Text
          style={{
            color: 'white',
            width: '90%',
            fontSize: 32,
            fontWeight: '600',
            marginBottom: 48,
          }}
        >{`Let's find\na top doctor !`}</Text>
        <TextInput />
      </View>
      <Main />
    </View>
  );
};
