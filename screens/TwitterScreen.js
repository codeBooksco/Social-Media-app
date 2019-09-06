import React from 'react';
import { WebView } from 'react-native';

export default function TwitterScreen() {
  return (
    <WebView
        source={{uri: 'https://twitter.com/fahadmustafa26?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}}
        style={{marginTop: 20}}
      />
  );
}

TwitterScreen.navigationOptions = {
  header: null,
};
