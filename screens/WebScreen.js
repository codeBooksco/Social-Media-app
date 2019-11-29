import React from 'react';
import { WebView } from 'react-native';

export default function WebScreen() {
  return (
    <WebView
        source={{uri: 'https://techgrasp.pk/junaid-akram-man-behind-khalli-karao/'}}
        style={{marginTop: 20}}
      />
  );
}

WebScreen.navigationOptions = {
  header: null,
};
