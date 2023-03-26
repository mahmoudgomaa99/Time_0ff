import { StyleSheet, Platform } from 'react-native';
import { MarginsAndPaddings, h, w } from 'values/Dimensions';
export const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    flex: 5.9,
  },
  inputContainerStyling: {
    backgroundColor: '#F9F9F9',
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 25,
    height: h * 0.055,
    padding: MarginsAndPaddings.xl,
  },
  filter: {
    marginTop: Platform.OS === 'ios' ? -8 : 0,
    flex: 1,
  },
});
