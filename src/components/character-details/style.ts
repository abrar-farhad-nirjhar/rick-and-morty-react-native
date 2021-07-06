import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 200,
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
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center'
  },
  locProperties: {
    fontSize: 20,
  },
  iconMargin: {
    marginRight: 10
  }
});

export default styles;
