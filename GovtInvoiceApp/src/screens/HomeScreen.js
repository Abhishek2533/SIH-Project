import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Govt. Billing and Invoicing</Text>
      <Button
        title="Go to Invoice Screen"
        onPress={() => navigation.navigate('Invoice')}
      />
    </View>
  );
};

export default HomeScreen;