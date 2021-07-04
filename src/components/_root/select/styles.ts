import {StyleSheet} from 'react-native';

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
    borderColor: 'gainsboro',
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: 'black',
    color: 'white',
    marginRight: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  unSelected: {
    borderColor: 'gainsboro',
    borderWidth: 0.5,
    padding: 5,
    marginRight: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  boxTextSelected: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  boxText: {
    textAlign: 'center',
    fontWeight: '100',
  },
});

export default styles;
