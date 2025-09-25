import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you use Expo or a similar vector icon library
import Colors from '../constants/Colors';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="search" size={24} color={Colors.text} />
      <Text style={styles.title}>Menu</Text>
      <Ionicons name="bag-handle-outline" size={24} color={Colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;