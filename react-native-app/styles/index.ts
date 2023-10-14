import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  heading: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 8,
    padding: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: "12%"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default globalStyles;
