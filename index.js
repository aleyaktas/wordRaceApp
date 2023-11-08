/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import {firebase, initializeApp} from '@react-native-firebase/app';

const firebaseConfigForAndroid = {
  apiKey: 'AIzaSyB31CPhgBbuR1_W9bcPOUJfIVbKDbTVLVw',
  authDomain: 'word-race-project.firebaseapp.com',
  databaseURL: 'https://word-race-project.firebaseio.com',
  projectId: 'word-race-project',
  storageBucket: 'word-race-project.appspot.com',
  messagingSenderId: '1095205891850',
  appId: '1:1095205891850:android:a9fda9d9543a4f971654f3',
};
if (!firebase.apps.length) {
  initializeApp(Platform.OS === 'android' && firebaseConfigForAndroid);
}

AppRegistry.registerComponent(appName, () => App);
