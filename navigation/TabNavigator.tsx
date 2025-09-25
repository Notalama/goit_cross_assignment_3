import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { MaterialIcons } from '@expo/vector-icons';

// Import your screen components
import CartScreen from '@/screens/CartScreen';
import HomeScreen from '@/screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: 'white',
          paddingVertical: 5,
          height: 60,
          borderTopColor: ' transparent',
        },
      }}>
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="explore" color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="shopping-cart" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
