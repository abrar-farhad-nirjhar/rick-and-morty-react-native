import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
    flexDirection: 'column',
  },
  img: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 15,
    color: 'black',
    position: 'absolute',
    bottom: -200,
  },
});

export default styles;
