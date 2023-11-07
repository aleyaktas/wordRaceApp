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
        <Icon name={iconName} width="20" height="20" color={colors.secondary} />

        <Text
          style={styles.title}
          className="text-sm font-poppinsMedium text-text text-textPrimary">
          {title}
        </Text>
      </View>
      {customComponent || (
        <Icon name="ArrowRight" width="20" height="20" color={colors.black} />
      )}
    </TouchableOpacity>
  );
};
