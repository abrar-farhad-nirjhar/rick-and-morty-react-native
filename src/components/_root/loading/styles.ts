import {StyleSheet} from 'react-native';
import variables from '../../../utils/variables';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
    flexDirection: 'column',
    position: 'relative',
  },
  img: {
    width: 300,
    height: 300,
    top: -100,
  },
  text: {
    fontSize: 15,
    color: 'black',
    position: 'absolute',
    top: 420,
  },
});

export default styles;
