import Colors from '@/constants/Colors';
import TabNavigator from '@/navigation/TabNavigator';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TabNavigator />
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});

export default App;