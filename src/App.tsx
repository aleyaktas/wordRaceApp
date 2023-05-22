import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import ForgotPassword from './screens/ForgotPassword';
import NewPassword from './screens/NewPassword';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <NewPassword />
    </SafeAreaView>
  );
}

export default App;
