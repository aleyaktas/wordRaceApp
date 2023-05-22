import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Intro from './screens/Intro';
import NoDataCard from './components/NoDataCard';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <NoDataCard
        image="EmptyRoom"
        description="lorem ipsum"
        buttonLabel="test"
      />
    </SafeAreaView>
  );
}

export default App;
