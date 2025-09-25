import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { productsStackRoutes } from "./route";
import { ProductsStackParamList } from "./types";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Stack = createStackNavigator<ProductsStackParamList>();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={productsStackRoutes.PRODUCT_LIST}
        component={ProductListScreen}
        options={{ title: "Explore" }}
      />
      <Stack.Screen
        name={productsStackRoutes.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
        options={{ title: "Product details" }}
      />
      <Stack.Screen
        name={productsStackRoutes.CHECKOUT}
        component={CheckoutScreen}
        options={{ title: "Checkout" }}
      />
    </Stack.Navigator>
  );
}
