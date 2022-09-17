import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  style?: StyleProp<ViewStyle>;
  hasNotif?: boolean;
};

export const IconNotifications: FC<Props> = ({
  hasNotif = true,
  ...props
}) => (
  <Svg {...props} fill='none'>
    <Rect
      width={51}
      height={51}
      rx={14}
      fill='#66B3FF'
      fillOpacity={0.69}
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M33.826 25.31a4.06 4.06 0 0 1 .674 2.05l-.027.184a4.14 4.14 0 0 1-.94 2.754 4.886 4.886 0 0 1-3.123 1.54 40.661 40.661 0 0 1-8.872 0 4.832 4.832 0 0 1-3.07-1.54 4.08 4.08 0 0 1-.967-2.736v-.123a4.2 4.2 0 0 1 .728-2.103l.07-.088c.445-.5.751-1.107.888-1.76V21.675a.763.763 0 0 1 1.464.159v1.812a.46.46 0 0 1 0 .097 5.263 5.263 0 0 1-1.225 2.446 2.528 2.528 0 0 0-.39 1.25v.193c-.02.623.188 1.233.586 1.716a3.32 3.32 0 0 0 2.076.986c2.854.308 5.733.308 8.588 0a3.329 3.329 0 0 0 2.12-1.03c.378-.472.576-1.06.56-1.663v-.202a2.623 2.623 0 0 0-.382-1.259 5.266 5.266 0 0 1-1.296-2.446.46.46 0 0 1 0-.097v-1.821c-.257-2.657-2.927-4.303-5.252-4.303a5.761 5.761 0 0 0-2.821.73.768.768 0 0 1-.777.006.755.755 0 0 1 .032-1.325A7.251 7.251 0 0 1 25.965 16c3.07 0 6.512 2.165 6.902 5.64V23.453c.134.654.44 1.261.888 1.76.026.03.05.062.07.096Zm-7.575 9.12c.522-.077.99-.358 1.302-.78h.01a.77.77 0 0 1 1.077-.1.755.755 0 0 1 .102 1.069A3.559 3.559 0 0 1 25.956 36a3.559 3.559 0 0 1-2.777-1.381.755.755 0 0 1 .102-1.07.77.77 0 0 1 1.078.102 1.99 1.99 0 0 0 1.892.78Z'
      fill='url(#a)'
    />
    {hasNotif ? <Circle cx={38} cy={13} r={3} fill='#FF4545' /> : null}
    <Defs>
      {/* @ts-ignore */}
      <LinearGradient
        id='a'
        x1={26.026}
        y1={17.25}
        x2={26.026}
        y2={41.536}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#fff' />
        <Stop offset={1} stopColor='#ff91ac' stopOpacity={0.9} />
      </LinearGradient>
    </Defs>
  </Svg>
);
