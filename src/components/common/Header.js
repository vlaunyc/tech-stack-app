import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>

  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 90,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },

  textStyle: {
    fontSize: 20,
    paddingTop: 20,
  }
};

export { Header };
