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
        <View
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            New Item
          </Text>
        </View>

        <Text
          style={{
            color: 'gray',
            marginHorizontal: 10,
          }}>
          Title*
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
          }}
          autoFocus
          value={Title}
          onChangeText={(input) => {
            setTitle(input);
          }}
          placeholder={'E.g., "Setup meeting with my project manager"'}
        />
        <Text
          style={{
            color: 'gray',
            marginHorizontal: 10,
          }}>
          Notes
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
          }}
          value={description}
          onChangeText={(input) => {
            setdescription(input);
          }}
          placeholder={
            'Description or any informations related to this task ...'
          }
        />

        {/* Command  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 10,
          }}>
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
            }}
            disabled={Title.length <= 0}
            onPress={() => {
              // console.log({
              //   title: Title,
              //   description: description,
              // });
              if (Title.length > 0) {
                addToImportantAndUrgent({
                  title: Title,
                  description: description,
                });
                setaddElementDialog(false);
              }
            }}>
            <View
              style={{
                height: 30,
                width: 70,
                backgroundColor: Title.length <= 0 ? 'gray' : 'green',
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
    </View>
  );
}
