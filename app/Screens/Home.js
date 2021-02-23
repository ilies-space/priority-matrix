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
  // --------------  handlers
  const [selectedList, setselectedList] = useState('ImportantAndUrgent');

  // Functions
  function addToImportantAndUrgent(newElement) {
    switch (selectedList) {
      case 'ImportantAndUrgent':
        setImportantAndUrgent((prevList) => {
          return [newElement, ...prevList];
        });
        break;
      case 'ImportantButNotUrgent':
        setImportantButNotUrgent((prevList) => {
          return [newElement, ...prevList];
        });
        break;
      case 'NotImportantButUrgent':
        setNotImportantButUrgent((prevList) => {
          return [newElement, ...prevList];
        });
        break;
      case 'NotImportantAndNotUrgent':
        setNotImportantAndNotUrgent((prevList) => {
          return [newElement, ...prevList];
        });
        break;
    }
  }

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 0.5,
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
            backgroundColor: '#ACCE23',
            borderRightWidth: 0.5,
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
                padding: 5,
              }}>
              Important & urgent
            </Text>
            <TouchableOpacity
              onPress={() => {
                setselectedList('ImportantAndUrgent');
                setaddElementDialog(true);
              }}>
              <Text
                style={{
                  backgroundColor: '#2c3e50',
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

        {/* 2 : ImportantButNotUrgent*/}

        <View
          style={{
            flex: 1,
            backgroundColor: '#00B1D5',
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
                padding: 5,
              }}>
              Important but not urgent
            </Text>
            <TouchableOpacity
              onPress={() => {
                setselectedList('ImportantButNotUrgent');
                setaddElementDialog(true);
              }}>
              <Text
                style={{
                  backgroundColor: '#2c3e50',
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
            data={ImportantButNotUrgent}
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
                          setImportantButNotUrgent((prevList) => {
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
      </View>

      {/* Bottom -  */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          flexDirection: 'row',
        }}>
        {/* 1 : NotImportantButUrgent */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#FCBF08',
            borderRightWidth: 0.5,
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
                padding: 5,
              }}>
              Not important but urgent
            </Text>
            <TouchableOpacity
              onPress={() => {
                setselectedList('NotImportantButUrgent');
                setaddElementDialog(true);
              }}>
              <Text
                style={{
                  backgroundColor: '#2c3e50',
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
            data={NotImportantButUrgent}
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
                          setNotImportantButUrgent((prevList) => {
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

        {/* 2 NotImportantAndNotUrgent */}

        <View
          style={{
            flex: 1,
            backgroundColor: '#F13B47',
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
                padding: 5,
              }}>
              Not important & not urgent
            </Text>
            <TouchableOpacity
              onPress={() => {
                setselectedList('NotImportantAndNotUrgent');
                setaddElementDialog(true);
              }}>
              <Text
                style={{
                  backgroundColor: '#2c3e50',
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
            data={NotImportantAndNotUrgent}
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
                          setNotImportantAndNotUrgent((prevList) => {
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
