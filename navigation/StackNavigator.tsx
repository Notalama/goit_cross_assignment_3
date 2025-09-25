import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();
export const productStackRoutes = {
  PRODUCT_LIST: "product_list",
  PRODUCT_DETAILS: "product_details",
};

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={productStackRoutes.PRODUCT_LIST}
        component={HomeScreen}
        options={{ title: "Explore" }}
      />
      <Stack.Screen
        name={productStackRoutes.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
        options={{ title: "Product details" }}
      />
    </Stack.Navigator>
  );
}
