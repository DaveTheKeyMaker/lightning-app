import React from 'react';
import {
  TextInput,
  TextPropTypes,
  ViewPropTypes,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Text from './text';
import { colors, font } from './style';

//
// Amount Input Field
//

const amountStyles = StyleSheet.create({
  input: {
    fontFamily: 'WorkSans ExtraLight',
    fontSize: font.sizeXXXL,
    lineHeight: font.lineHeightXXXL,
    color: colors.blackText,
    outline: 'none',
    textAlign: 'center',
  },
});

export const AmountInputField = ({ style, ...props }) => (
  <TextInput
    style={[amountStyles.input, style]}
    keyboardType="numeric"
    autoCorrect={false}
    autoCapitalize="none"
    underlineColorAndroid="rgba(0,0,0,0)"
    placeholder="0"
    placeholderTextColor={colors.blackText}
    {...props}
  />
);

AmountInputField.propTypes = {
  style: TextPropTypes.style,
};

//
// Input Field
//

const inputStyles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    fontFamily: 'OpenSans Regular',
    fontSize: font.sizeM,
    lineHeight: font.lineHeightM + 2 * 8,
    color: colors.blackText,
    outline: 'none',
    textAlign: 'center',
    borderBottomColor: colors.blackText,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export const InputField = ({ style, ...props }) => (
  <TextInput
    style={[inputStyles.input, style]}
    autoCorrect={false}
    autoCapitalize="none"
    underlineColorAndroid="rgba(0,0,0,0)"
    placeholderTextColor={colors.greyPlaceholder}
    {...props}
  />
);

InputField.propTypes = {
  children: PropTypes.string,
  style: TextPropTypes.style,
};

//
// Named Field
//

const namedStyles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.blackText,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  name: {
    color: colors.blackText,
    fontSize: font.sizeM,
    lineHeight: font.lineHeightM + 2 * 8,
    marginRight: 10,
  },
  text: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'OpenSans Light',
    fontSize: font.sizeM,
    lineHeight: font.lineHeightM + 2 * 8,
    color: colors.blackText,
  },
});

export const NamedField = ({ name, children, style }) => (
  <View style={[namedStyles.content, style]}>
    <Text style={namedStyles.name}>{name}</Text>
    <Text style={namedStyles.text}>{children}</Text>
  </View>
);

NamedField.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  style: ViewPropTypes.style,
};
