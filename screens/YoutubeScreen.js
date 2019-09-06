import React from 'react';
import { WebView } from 'react-native';

export default function YoutubeScreen() {
  return (
    <WebView
        source={{uri: 'https://www.youtube.com/channel/UCyJKHam7TnIWxo_GWb2-RZQ'}}
        style={{marginTop: 20}}
      />
  );
}

YoutubeScreen.navigationOptions = {
  header: null,
};
