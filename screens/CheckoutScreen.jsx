import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const PaymentMethodCard = ({ title, description, isSelected, onPress }) => (
  <TouchableOpacity style={[styles.card, isSelected && styles.selectedCard]} onPress={onPress}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Ionicons
        name={isSelected ? "checkmark-circle" : "radio-button-off-sharp"}
        size={24}
        color={isSelected ? Colors.primary : Colors.placeholder}
      />
    </View>
    {description && <Text style={styles.cardDescription}>{description}</Text>}
  </TouchableOpacity>
);

const CheckoutScreen = () => {
  const [selectedPayment, setSelectedPayment] = React.useState('creditCard');

  return (
    <View style={styles.container}>
      {/* Checkout Steps Header */}
      <View style={styles.stepsContainer}>
        <Text style={styles.stepText}>Your cart</Text>
        <Ionicons name="chevron-forward-outline" size={16} color={Colors.text} />
        <Text style={[styles.stepText, styles.activeStep]}>Payment</Text>
        <Ionicons name="chevron-forward-outline" size={16} color={Colors.text} />
        <Text style={styles.stepText}>Review</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Choose a payment method</Text>

        <PaymentMethodCard
          title="Credit Card"
          description="**** **** **** 1234"
          isSelected={selectedPayment === 'creditCard'}
          onPress={() => setSelectedPayment('creditCard')}
        />
        <PaymentMethodCard
          title="Visa"
          description="**** **** **** 5678"
          isSelected={selectedPayment === 'visa'}
          onPress={() => setSelectedPayment('visa')}
        />

        <TouchableOpacity style={styles.addCardButton}>
          <Ionicons name="add-circle-outline" size={20} color={Colors.primary} />
          <Text style={styles.addCardText}>Add new card</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <Ionicons
            name="checkbox-outline"
            size={24}
            color={Colors.primary}
            style={styles.checkboxIcon}
          />
          <Text style={styles.checkboxText}>My billing address is the same as my shipping address</Text>
        </View>

        <View style={styles.applePayContainer}>
          <Ionicons name="logo-apple" size={24} color={Colors.text} />
          <Text style={styles.applePayText}>Apple Pay</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepText: {
    fontSize: 14,
    color: Colors.placeholder,
    marginHorizontal: 5,
  },
  activeStep: {
    fontWeight: 'bold',
    color: Colors.text,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  selectedCard: {
    borderColor: Colors.primary,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 14,
    color: Colors.text,
    marginTop: 5,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  addCardText: {
    color: Colors.primary,
    fontSize: 16,
    marginLeft: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkboxIcon: {
    marginRight: 10,
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
  },
  applePayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#EAEAEA',
  },
  applePayText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;