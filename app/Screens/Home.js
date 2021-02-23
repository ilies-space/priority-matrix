import React, {Component, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import AddElement from '../Componenets/AddElement';

export default function Home() {
  // variables  :
  // -------------- Lists
  const [ImportantAndUrgent, setImportantAndUrgent] = useState([]);
  const [ImportantButNotUrgent, setImportantButNotUrgent] = useState([]);
  const [NotImportantButUrgent, setNotImportantButUrgent] = useState([]);
  const [NotImportantAndNotUrgent, setNotImportantAndNotUrgent] = useState([]);
  // --------------  Components
  const [addElementDialog, setaddElementDialog] = useState(false);

  // Functions
  function addToImportantAndUrgent(newElement) {
    setImportantAndUrgent((prevList) => {
      return [newElement, ...prevList];
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
      }}>
      {/* TOP -  */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          flexDirection: 'row',
        }}>
        {/* 1 : ImportantAndUrgent */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'pink',
          }}>
          {/* Title  */}
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text
              style={{
                padding: 2,
              }}>
              Important and urgent
            </Text>
            <TouchableOpacity
              onPress={() => {
                console.log('add new element');
                setaddElementDialog(true);
              }}>
              <Text
                style={{
                  backgroundColor: 'green',
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  textAlign: 'center',
                  color: 'white',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          {/* List of items  */}
          <FlatList
            data={ImportantAndUrgent}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(item.title, item.description, [
                      {
                        text: 'cancel',
                      },
                      {
                        text: 'delete',
                        onPress: () => {
                          setImportantAndUrgent((prevList) => {
                            return prevList.filter((elm) => elm != item);
                          });
                        },
                      },
                    ]);
                  }}
                  style={{
                    padding: 5,
                    marginVertical: 2,
                  }}>
                  <Text> {item.title} </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* 2 */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
          }}></View>
      </View>

      {/* Bottom -  */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          flexDirection: 'row',
        }}>
        {/* 1 */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
          }}></View>

        {/* 2 */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellow',
          }}></View>
      </View>

      {/* // add new element to list  */}
      {addElementDialog ? (
        <AddElement
          addToImportantAndUrgent={addToImportantAndUrgent}
          setaddElementDialog={setaddElementDialog}
        />
      ) : (
        <View />
      )}
    </View>
  );
}
