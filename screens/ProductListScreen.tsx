import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Colors from '../constants/colors';
import { COFFEE_PRODUCTS, SUMMER_PRODUCTS } from '../constants/Data';
import { productsStackRoutes } from '../navigation/route';

const ProductListScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>For this summer</Text>
        <View style={styles.productsContainer}>
          {SUMMER_PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              imageUrl={product.imageUrl}
              onPress={() => {
                console.log(product);
                return navigation.navigate(productsStackRoutes.PRODUCT_DETAILS, { product });
              }}
            />
          ))}
        </View>
        <Text style={styles.sectionTitle}>Coffee</Text>
        <View style={styles.productsContainer}>
          {COFFEE_PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              imageUrl={product.imageUrl}
              onPress={() => {
                return navigation.navigate(productsStackRoutes.PRODUCT_DETAILS, { product });
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: 15,
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default ProductListScreen;