import React from 'react';
import { WebView } from 'react-native';

export default function InstaScreen() {
  return (
    <WebView
        source={{uri: 'https://www.instagram.com/ganjiswag/'}}
        style={{marginTop: 20}}
      />
  );
}

InstaScreen.navigationOptions = {
  header: null,
};
