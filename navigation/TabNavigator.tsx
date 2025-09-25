import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../constants/Colors";
import ProductsStack from "./StackNavigator";
import { tabRoutes } from "./route";
import { TabsParamList } from "./types";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Tab = createBottomTabNavigator<TabsParamList>();

export default function AppTabs() {
  const getTabBarIcon = (routeName: string, color: string, size: number) => {
    const iconMap: Record<string, string> = {
      [tabRoutes.CART_TAB]: "compass",
      [tabRoutes.EXPLORE_TAB]: "cart-outline",
    };

    const iconName = iconMap[routeName] || "ellipse";

    return <Ionicons name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.placeholder,
        tabBarStyle: {
          height: 60,
        }
      })}
      initialRouteName={tabRoutes.CART_TAB}
    >
      <Tab.Screen
        name={tabRoutes.CART_TAB}
        component={ProductsStack}
        options={{ headerShown: false, title: "Explore" }}
      />
      <Tab.Screen
        name={tabRoutes.EXPLORE_TAB}
        component={CartScreen}
        options={{ title: "Cart" }}
      />
    </Tab.Navigator>
  );
}
