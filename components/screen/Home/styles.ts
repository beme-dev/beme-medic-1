import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blueCard: {
    backgroundColor: '#51A8FF',
    borderRadius: 32,
    height: 323,
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: '90%',
  },
  input: {
    borderRadius: 9999,
    width: '90%',
    height: 56,
    backgroundColor: 'white',
  },
});
