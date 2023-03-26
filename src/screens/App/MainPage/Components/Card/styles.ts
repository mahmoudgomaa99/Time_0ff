import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 11,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 5,
    elevation: 5,
    shadowColor: COLORS.grey,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: w * 0.23,
  },
  image: {
    width: '100%',
    height: 110,
    borderRadius: 15,
  },
  contentContainer: {
    width: w * 0.66,
    marginHorizontal: 5,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
  },
  decription: {
    fontSize: 10,
    color: '#B8B8B8',
    marginVertical: 5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 5,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Arabic: {
    flexDirection: 'row-reverse',
  },
});
