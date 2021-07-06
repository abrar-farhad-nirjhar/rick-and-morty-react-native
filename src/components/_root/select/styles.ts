import { StyleSheet } from 'react-native';
import variables from '../../../utils/variables';

const styles = StyleSheet.create({
  select: {
    alignItems: 'center',

    textTransform: 'capitalize',
  },
  headerText: {
    fontSize: 15,
    fontWeight: '100',
    marginBottom: 10,
  },
  selectElements: {
    display: 'flex',
    flexDirection: 'row',
  },
  selected: {
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: 'black',
    color: variables.green,
    marginRight: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  unSelected: {
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 5,
    marginRight: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  boxTextSelected: {
    color: variables.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  boxText: {
    textAlign: 'center',
    fontWeight: '100',
    color: 'black',
  },
});

export default styles;
