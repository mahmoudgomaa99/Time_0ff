import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w, h } from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 14,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    elevation: 10,
    shadowColor: '#bfbdbd',
    backgroundColor: 'white',
    shadowOffset: { height: 1, width: 5 },
    shadowOpacity: 1,
    marginHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: h * 0.14,
    borderRadius: 15,
  },
  contentContainer: {
    flex: 2.3,
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
    maxHeight: h * 0.034,
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
    maxWidth: '90%',
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
