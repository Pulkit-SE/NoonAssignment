import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

interface CustomHeaderProps {
  title: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftIcon?: string;
  rightIcon?: string | undefined;
  backgroundColor?: string;
  textColor?: string;
  showBackButton?: boolean;
}

const CustomHeader = ({
  title,
  onLeftPress,
  onRightPress,
  showBackButton = true,
  leftIcon = 'arrow-back',
  rightIcon = undefined,
  backgroundColor = '#fff',
  textColor = '#000',
}: CustomHeaderProps) => {
  const isTitleCenterd = showBackButton ? 'space-between' : 'center';
  return (
    <View
      style={[
        styles.header,
        {backgroundColor, ...{justifyContent: isTitleCenterd}},
      ]}>
      {showBackButton && (
        <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
          {leftIcon && <Ionicons name={leftIcon} size={24} color={textColor} />}
        </TouchableOpacity>
      )}
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>

      <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
        {rightIcon && <Ionicons name={rightIcon} size={24} color={textColor} />}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
