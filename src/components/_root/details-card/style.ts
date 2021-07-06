import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 20,
    marginTop: 10,
  },
  element: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  text: {
    fontWeight: '100',
    fontSize: 15,
  },
});

export default styles;
