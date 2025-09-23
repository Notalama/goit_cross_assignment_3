import Colors from '@/constants/Colors';
import CartScreen from '@/screens/CartScreen';
import CheckoutScreen from '@/screens/CheckoutScreen';
import HomeScreen from '@/screens/HomeScreen';
import ProductDetailsScreen from '@/screens/ProductDetailsScreen'; // Import the new screen
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setCurrentScreen('ProductDetails');
  };

  const handleCheckout = () => {
    setCurrentScreen('Checkout');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen onProductPress={handleProductPress} />;
      case 'Cart':
        return <CartScreen onCheckout={handleCheckout} />;
      case 'Checkout':
        return <CheckoutScreen />;
      case 'ProductDetails':
        return <ProductDetailsScreen product={selectedProduct} onClose={() => setCurrentScreen('Home')} />;
      default:
        return <HomeScreen onProductPress={handleProductPress} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {renderScreen()}
        
        {/* Simple Navigation Menu for Demonstration */}
        <View style={styles.navigationBar}>
          <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.navButton}>
            <Ionicons 
              name="compass-outline" 
              size={24} 
              color={currentScreen === 'Home' ? Colors.primary : Colors.text} 
            />
            <Text style={[styles.navText, { color: currentScreen === 'Home' ? Colors.primary : Colors.text }]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentScreen('Cart')} style={styles.navButton}>
            <Ionicons 
              name="bag-handle-outline" 
              size={24} 
              color={currentScreen === 'Cart' ? Colors.primary : Colors.text} 
            />
            <Text style={[styles.navText, { color: currentScreen === 'Cart' ? Colors.primary : Colors.text }]}>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  container: {
    flex: 1,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 16,
    color: Colors.text,
    marginTop: 4,
  },
});

export default App;