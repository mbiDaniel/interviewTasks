import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_PRODUCTS} from './apollo/query';
import {ProductType} from './types';
import Product from './components/product';
import globalStyles from './styles';

function App(): JSX.Element {
  const {loading, data, error} = useQuery(GET_PRODUCTS);

  const renderProductItem = ({item}: {item: ProductType}) => (
    <Product item={item} />
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Product List</Text>
      {error && (
        <View style={globalStyles.loadingContainer}>
          <Text>An error occured</Text>
        </View>
      )}
      {loading ? (
        <View style={globalStyles.loadingContainer}>
          <Text>Loading</Text>
        </View>
      ) : (
        <FlatList
          data={data?.products.data}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
}

export default App;
