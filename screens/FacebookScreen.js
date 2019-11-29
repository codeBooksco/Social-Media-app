import React from 'react';
import { WebView, StyleSheet, Button, View } from 'react-native';

export default function FacebookScreen() {
  return (
    <View style={styles.container}>
      <WebView style={styles.hide}
          source={{uri: 'https://www.facebook.com/junaid.akram/'}}
          style={{marginTop: 20}}
        />
    </View>
  );
}

FacebookScreen.navigationOptions = {
  header: null,
};
// _6l_w _84gg img sp_S-XNOH9-hnl sx_18ffc7

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});