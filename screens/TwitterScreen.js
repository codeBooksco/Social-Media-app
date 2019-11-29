import React from 'react';
import { WebView } from 'react-native';

export default function TwitterScreen() {
  return (
    <WebView
        source={{uri: 'https://twitter.com/junaidakram83?lang=en'}}
        style={{marginTop: 20}}
      />
  );
}

TwitterScreen.navigationOptions = {
  header: null,
};
