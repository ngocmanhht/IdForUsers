import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, TextProps} from 'react-native';

export const RobotoText = ({props}: {props: TextProps}) => {
  const {t} = useTranslation();
  const {fontWeight} = StyleSheet.flatten(props.style || {});
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: fontWeight === 'bold' ? 'Roboto-Bold' : 'Roboto-Regular',
        },
      ]}>
      {t(`${props.children}`)}
    </Text>
  );
};
