import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // (Total width - padding on both sides - spacing between) / 2 cards

type ProductCardProps = {
  name: string;
  price: number | string;
  imageUrl?: string;
  onPress?: () => void;
};

const ProductCard = ({ name, price, imageUrl, onPress }: ProductCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.imagePlaceholder} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>€ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: Colors.cardBackground,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
});

export default ProductCard;