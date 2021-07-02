import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '100',
  },
  actionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gainsboro',
    fontSize: 20,
    borderRadius: 10,
    padding: 5,
  },
  filterContainer: {
    marginTop: 10,
  },
});

export default styles;
