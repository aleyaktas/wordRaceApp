import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../../themes/colors';
import Icon from '../../themes/icon';
import style from './styles';
import {StyleProps, TextInputProps} from './types';

export default ({
  onChange,
  onFocus,
  onPressIn,
  autoFocus,
  placeholder,
  autoCapitalize,
  iconName,
  numberOfLine,
  multiline,
  iconWidth = '17',
  iconHeight = '17',
  fontSize = 15,
  onButtonPress,
  buttonIcon = '',
  buttonIconWidth = '17',
  buttonIconHeight = '17',
  iconColor = colors.primary,
  iconPosition = 'right',
  backgroundColor = colors.white,
  activeBackgroundColor = colors.white,
  containerStyle,
  value,
  maxLength,
  editable,
  autoCorrect,
  keyboardType,
  secureTextEntry,
  shadow,
}: TextInputProps) => {
  const styles: StyleProps = style({
    backgroundColor,
    fontSize,
    activeBackgroundColor,
    shadow,
  });
  const MTextInput = TextInput;
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={
        focused
          ? [styles.fContainer, containerStyle]
          : [styles.container, containerStyle]
      }>
      {iconName && iconPosition === 'left' && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
      <View style={styles.leftContainer}>
        <MTextInput
          autoFocus={autoFocus}
          onPressIn={onPressIn}
          textAlignVertical="center"
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          maxLength={maxLength}
          editable={editable}
          style={styles.input}
          numberOfLines={numberOfLine}
          placeholder={placeholder}
          placeholderTextColor={colors.lightText}
          value={value}
          onChangeText={(text: string) => {
            if (onChange) onChange(text);
          }}
          onFocus={() => {
            setFocused(true);
            if (onFocus) onFocus();
          }}
          onBlur={() => setFocused(false)}
        />
      </View>
      {iconName && iconPosition === 'right' && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
      {typeof onButtonPress !== 'undefined' && (
        <TouchableOpacity onPress={onButtonPress}>
          <Icon
            name={buttonIcon}
            width={buttonIconWidth}
            height={buttonIconHeight}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
