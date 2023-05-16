import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Register />
    </SafeAreaView>
  );
}

export default App;
