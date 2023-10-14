import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ProductType} from '../types';
import productStyles from '../styles/product';

export default function Product({item}: {item: ProductType}): JSX.Element {
  return (
    <TouchableOpacity style={productStyles.productItem}>
      <Image style={productStyles.productImage} source={{uri: item.imageUrl}} />
      <View style={productStyles.infoContainer}>
        <Text style={productStyles.productName}>{item.name}</Text>
        <Text style={productStyles.productPrice}>
          {item.currency.toString()} {item.price.toString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
