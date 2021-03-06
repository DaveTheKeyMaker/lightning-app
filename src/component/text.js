import React from 'react';
import { Text as RNText, TextPropTypes, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { color, font } from './style';
import './font';

//
// Base Text
//

const baseStyles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans Regular',
    fontSize: font.sizeBase,
    lineHeight: font.lineHeightBase,
    color: color.white,
    zIndex: 1,
  },
});

export const Text = ({ children, style, ...props }) => (
  <RNText style={[baseStyles.text, style]} {...props}>
    {children}
  </RNText>
);

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: TextPropTypes.style,
};

//
// Copy Text
//

const copyStyles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans Light',
    fontSize: font.sizeBase,
    lineHeight: 22,
  },
});

export const CopyText = ({ children, style }) => (
  <Text style={[copyStyles.text, style]}>{children}</Text>
);

CopyText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: TextPropTypes.style,
};

//
// CopyOnboard Text
//

const copyOnboardStyles = StyleSheet.create({
  text: {
    fontFamily: 'WorkSans Light',
    fontSize: font.sizeXXL,
    lineHeight: font.lineHeightXXL,
  },
});

export const CopyOnboardText = ({ children = '', style }) => (
  <Text style={[copyOnboardStyles.text, style]}>{children}</Text>
);

CopyOnboardText.propTypes = {
  children: PropTypes.string.isRequired,
  style: TextPropTypes.style,
};

//
// H1 Text
//

const h1Styles = StyleSheet.create({
  text: {
    fontFamily: 'WorkSans Light',
    fontSize: font.sizeXXL,
    lineHeight: font.lineHeightXXL,
  },
});

export const H1Text = ({ children = '', style }) => (
  <Text style={[h1Styles.text, style]}>{children.toUpperCase()}</Text>
);

H1Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: TextPropTypes.style,
};

//
// H3 Text
//

const h3Styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans Regular',
    fontSize: font.sizeM,
    lineHeight: font.lineHeightM,
  },
});

export const H3Text = ({ children = '', style }) => (
  <Text style={[h3Styles.text, style]}>{children.toUpperCase()}</Text>
);

H3Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: TextPropTypes.style,
};

//
// H4 Text
//

const h4Styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans SemiBold',
    fontSize: font.sizeS,
    lineHeight: font.lineHeightS,
  },
});

export const H4Text = ({ children, style }) => (
  <Text style={[h4Styles.text, style]}>{children}</Text>
);

H4Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: TextPropTypes.style,
};

export default Text;
