import { FC } from 'react';
import { Text, View } from 'react-native';
import { BackOrange, Star } from '../../../atoms';

export type CardProps = {
  title: string;
  name: string;
  job: string;
  note: number;
};

export const Card: FC<CardProps> = ({ title, name, job, note }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        height: 94,
        elevation: 5,
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    >
      <BackOrange height={94} width={94} />
      <View style={{ marginLeft: 10, paddingTop: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 8 }}>
          {title} {name}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 20 }}>{job}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Star size={16} />
          <Text style={{ fontSize: 12, marginLeft: 5 }}>{note}</Text>
        </View>
      </View>
    </View>
  );
};
