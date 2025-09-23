import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import HomeScreen from '@/screens/HomeScreen';
import CartScreen from '@/screens/CartScreen';
import CheckoutScreen from '@/screens/CheckoutScreen';
import Colors from '@/constants/Colors';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Cart':
        return <CartScreen onCheckout={() => setCurrentScreen('Checkout')} />;
      case 'Checkout':
        return <CheckoutScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {renderScreen()}
        
        {/* Simple Navigation Menu for Demonstration */}
        <View style={styles.navigationBar}>
          <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.navButton}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentScreen('Cart')} style={styles.navButton}>
            <Text style={styles.navText}>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentScreen('Checkout')} style={styles.navButton}>
            <Text style={styles.navText}>Checkout</Text>
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
  },
  navText: {
    fontSize: 16,
    color: Colors.text,
  },
});

export default App;