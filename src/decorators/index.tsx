import React, {useEffect, useState} from 'react';
import {View, Keyboard, StyleProp, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const BufferView: any = (storyFn: any) => (
  <View
    style={{
      flex: 1,
      height: '100%',
      paddingVertical: 40,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      overflow: 'visible',
    }}>
    {storyFn()}
  </View>
);

export const GrayView: any = (storyFn: any) => (
  <View style={{flex: 1, padding: 25, backgroundColor: '#F8F8F8'}}>
    {storyFn()}
  </View>
);

interface KeyboardViewProps {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

export const KeyboardView = ({children, style}: KeyboardViewProps) => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardDidShow = () => setKeyboardStatus(true);
  const keyboardDidHide = () => setKeyboardStatus(false);
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={[style]}>
      {children}
    </KeyboardAwareScrollView>
  );
};
