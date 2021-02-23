import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function AddElement({setaddElementDialog}) {
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
        <TouchableOpacity
          onPress={() => {
            setaddElementDialog(false);
          }}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
