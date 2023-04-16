import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';
import { h } from '../../../../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 11,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    elevation: 5,
    shadowColor: '#B4B4B433',
    backgroundColor: 'white',
    shadowOffset: { height: 2.2, width: 0.1 },
    shadowOpacity: 1,
    marginHorizontal: 15,
  },
  imageContainer: {
    width: w * 0.27,
  },
  image: {
    width: '100%',
    height: h * 0.14,
    borderRadius: 15,
  },
  contentContainer: {
    width: w * 0.59,
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
    maxWidth:w*.70
  },
  decription: {
    fontSize: 10,
    color: '#B8B8B8',
    marginVertical: 5,
    maxHeight: h * 0.05,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 5,
    lineHeight: 14,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Arabic: {
    flexDirection: 'row-reverse',
  },
  heart: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#B4B4B433',
    shadowOffset: { height: 2.2, width: 0.1 },
    shadowOpacity: 1,
    borderRadius: 20,
  },
});
