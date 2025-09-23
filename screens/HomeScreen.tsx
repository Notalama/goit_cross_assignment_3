import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Colors from '../constants/Colors';
import { COFFEE_PRODUCTS, SUMMER_PRODUCTS } from '../constants/Data';

type HomeScreenProps = {
  onProductPress?: (product: any) => void;
};

const HomeScreen = ({ onProductPress }: HomeScreenProps) => {
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
              onPress={() => onProductPress?.(product)}
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
              onPress={() => onProductPress?.(product)}
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

export default HomeScreen;