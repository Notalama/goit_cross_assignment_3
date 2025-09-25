import React from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import CartItem from '../components/CartItem';
import { CART_ITEMS } from '../constants/Data';
import colors from '../constants/Colors';
import { productsStackRoutes, tabRoutes } from '../navigation/route';

type CartItemData = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  quantity: number;
};

const CartScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;
  const checkoutButtonHeight = isSmallScreen ? 44 : 52;
  const checkoutFontSize = isSmallScreen ? 16 : 18;

  const renderItem: ListRenderItem<CartItemData> = ({ item }) => (
    <CartItem name={item.name} price={item.price} quantity={item.quantity} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your cart</Text>
      <FlatList<CartItemData>
        data={CART_ITEMS as CartItemData[]}
        renderItem={renderItem}
        keyExtractor={(item: CartItemData) => item.id}
        scrollEnabled={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>€ 27.00</Text>
      </View>
      <TouchableOpacity
        style={[styles.checkoutButton, { height: checkoutButtonHeight }]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate(tabRoutes.CART_TAB, { screen: productsStackRoutes.CHECKOUT })}
      >
        <Text style={[styles.checkoutButtonText, { fontSize: checkoutFontSize }]}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  list: {
    flex: 0,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CartScreen;