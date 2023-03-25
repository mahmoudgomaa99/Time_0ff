import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: MarginsAndPaddings.l,
  },
  Top: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  welcome: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  welcomeBack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  welcomeText: {
    fontSize: 14,
    color: COLORS.black,
  },
  nameText: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:-10
  },
  input: {
    width: w * 0.80,
  },
  inputContainerStyling: {
    backgroundColor: '#F9F9F9',
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 25,
    height: h * 0.055,
    padding: MarginsAndPaddings.xl,
    margin:0
  },
  paginationContainer: {
    width: w,
    height: h * 0.3,
    marginBottom: -20,
  },
  imageBackground: {
    borderRadius: 20,
    height: h * 0.25,
    width: w * 0.95,
    overflow: 'hidden',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  categoryText: {
    fontSize: 18,
    color: COLORS.black,
    marginBottom: MarginsAndPaddings.xxl,
  },
  trips: {
    marginLeft:-12,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tripText: {
    fontSize: 14,
    color: COLORS.black,
  },
  experiences: {
    marginTop: MarginsAndPaddings.ml,
    marginBottom: MarginsAndPaddings.xxl,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  experiencesText: {
    fontSize: 18,
    color: COLORS.black,
  },
  seeMore: {
    fontSize: 18,
    color: '#0370D6',
  },

  Arabic: {
    flexDirection: 'row-reverse',
  },
});