import React from 'react';
import { WebView } from 'react-native';

export default function InstaScreen() {
  return (
    <WebView
        source={{uri: 'https://www.instagram.com/mustafafahad26/?hl=en'}}
        style={{marginTop: 20}}
      />
  );
}

InstaScreen.navigationOptions = {
  header: null,
};
