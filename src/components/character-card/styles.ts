import {StyleSheet} from 'react-native';
import variables from '../../utils/variables';
const styles = StyleSheet.create({
  container: {
    borderColor: variables.borderColor,
    borderWidth: variables.borderWidth,
    padding: 5,
    marginBottom: 20,
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    height: variables.imageHeight,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 20,
  },
});

export default styles;
