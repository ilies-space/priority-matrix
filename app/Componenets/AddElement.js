import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function AddElement({
  setaddElementDialog,
  addToImportantAndUrgent,
}) {
  const [Title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  return (
    <View
      style={{
        position: 'absolute',
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
        <TextInput
          value={Title}
          onChangeText={(input) => {
            setTitle(input);
          }}
          placeholder={'TITLE'}
        />
        <TextInput
          value={description}
          onChangeText={(input) => {
            setdescription(input);
          }}
          placeholder={'Description'}
        />

        <TouchableOpacity
          onPress={() => {
            // console.log({
            //   title: Title,
            //   description: description,
            // });
            addToImportantAndUrgent({
              title: Title,
              description: description,
            });
            setaddElementDialog(false);
          }}>
          <View
            style={{
              height: 30,
              width: 70,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              ADD
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setaddElementDialog(false);
          }}>
          <View
            style={{
              height: 30,
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.5,
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              Close
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
