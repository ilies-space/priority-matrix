import React from 'react';
import {Text, View} from 'react-native';

export default function AddElement() {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'orange',
        height: '100%',
        width: '100%',
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          height: '100%',
          width: '100%',
          opacity: 0.5,
        }}
      />
      <View style={{backgroundColor: 'white'}}>
        <Text>ADD NEW ELEMENT</Text>
      </View>
    </View>
  );
}
