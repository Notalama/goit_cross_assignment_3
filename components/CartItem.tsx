import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

type CartItemProps = {
  name: string;
  price: string;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity }) => {
  const { width } = useWindowDimensions();
  const isSmall = width < 360;
  const buttonSize = isSmall ? 28 : 32;
  const iconSize = isSmall ? 16 : 18;
  const quantityFontSize = isSmall ? 15 : 16;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={[styles.quantityButton, { width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 }]}>
            <Ionicons name="remove-outline" size={iconSize} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.quantityText, { fontSize: quantityFontSize }]}>{quantity}</Text>
          <TouchableOpacity style={[styles.quantityButton, { width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 }]}>
            <Ionicons name="add-outline" size={iconSize} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.price}>€ {price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12.5,
    backgroundColor: colors.border,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
});

export default CartItem;