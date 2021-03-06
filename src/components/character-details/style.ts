import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'black'
  },
  property: {
    fontSize: 18,
    fontWeight: '100',
    marginBottom: 10,
  },
  topBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroll: {
    paddingBottom: 350,
  },
  propertyBottom: {
    fontSize: 20,
    fontWeight: '100',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },

});

export default styles;
