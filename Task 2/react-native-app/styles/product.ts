import {StyleSheet} from 'react-native';

const productStyles = StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: '#fff'
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: 'cover',
  },
  productName: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
  infoContainer: { 
    padding: 10
  }
});

export default productStyles;
