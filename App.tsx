import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from './src/themes/icon';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Word Race App</Text>
      <Icon name="User" color="red" width={50} height={50} />
    </SafeAreaView>
  );
}

export default App;
