import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '100',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '100',
  },
  img: {
    width: 350,
    height: 350,
  },
  swipe: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textSwipe: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '100',
  },
  iconMargin: {
    marginLeft: 10
  }
});

export default styles;
