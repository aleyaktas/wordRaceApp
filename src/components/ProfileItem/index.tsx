import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../themes/colors';
import style from './styles';
import {ProfileItemProps} from './types';
import Icon from '../../themes/icon';

export default ({
  title,
  iconName,
  customComponent,
  onPress,
}: ProfileItemProps) => {
  const styles = style();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.subContainer}>
        <Icon name={iconName} width="24" height="24" color={colors.primary} />

        <Text
          style={styles.title}
          className="text-sm font-poppinsMedium text-text">
          {title}
        </Text>
      </View>
      {customComponent || (
        <Icon name="Back" width="16" height="16" color={colors.black} />
      )}
    </TouchableOpacity>
  );
};
