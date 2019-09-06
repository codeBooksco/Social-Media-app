import React from 'react';
import { WebView } from 'react-native';

export default function WebScreen() {
  return (
    <WebView
        source={{uri: 'https://psl-t20.com/'}}
        style={{marginTop: 20}}
      />
  );
}

WebScreen.navigationOptions = {
  header: null,
};
