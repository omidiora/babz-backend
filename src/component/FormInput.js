import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLOR, WP} from '../common/theme';
import Icon from 'react-native-vector-icons/Entypo';

const FormInput = ({lablelText, value, onChangeText, placeholder}) => {
  return (
    <View style={styles._mainContainer}>
      <Text style={styles._labelText}>{lablelText}</Text>
      <View>
        <TextInput
          style={styles._textInputStyle}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={'black'}
        />
        {/* <View style={styles._icon}>
          <Icon name="check" size={15} color={COLOR.whiteColor} />
        </View> */}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  _mainContainer: {
    marginVertical: WP(3),
    bottom: WP(2),
  },
  _labelText: {
    paddingBottom: WP(4),
    fontWeight: '600',
    color: COLOR.blackColor,
    left: WP(1),
  },
  _textInputStyle: {
    borderWidth: 0.8,
    padding: WP(5),
    borderColor: COLOR.primaryBlue,
    borderRadius: WP(5),
    color: 'black',
  },
  _icon: {
    position: 'absolute',
    left: WP(75),
    top: WP(5),
    backgroundColor: COLOR.iconBlue,
    borderRadius: WP(5),
    padding: WP(1),
  },
});
