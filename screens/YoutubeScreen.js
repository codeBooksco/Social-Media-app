import React from 'react';
import { WebView } from 'react-native';

export default function YoutubeScreen() {
  return (
    <WebView
        source={{uri: 'https://m.youtube.com/channel/UCFo9mvW4ythx_tgT3NHaw-Q'}}
        style={{marginTop: 20}}
      />
  );
}

YoutubeScreen.navigationOptions = {
  header: null,
};
