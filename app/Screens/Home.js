import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddElement from '../Componenets/AddElement';
import {
  AddToImportantAndUrgent,
  DeleteFromImportantAndUrgent,
  AddToImportantButNotUrgent,
  DeleteFromImportantButNotUrgent,
} from '../Redux/ListsReducer';

export default function Home() {
  // reduxValues
  var ListsReducer = useSelector((state) => state.ListsReducer);
  // variables  :
  // -------------- Lists

  const [NotImportantButUrgent, setNotImportantButUrgent] = useState([]);
  const [NotImportantAndNotUrgent, setNotImportantAndNotUrgent] = useState([]);
  // --------------  Components
  const [addElementDialog, setaddElementDialog] = useState(false);
  // --------------  handlers
  const [selectedList, setselectedList] = useState('ImportantAndUrgent');
  const dispatch = useDispatch();
  const [refresh, setrefresh] = useState(0);
  // Functions
  function addToImportantAndUrgent(newElement) {
    switch (selectedList) {
      case 'ImportantAndUrgent':
        dispatch({
          type: AddToImportantAndUrgent,
          newItem: newElement,
        });
        setrefresh(refresh + 1);
        break;

      case 'ImportantButNotUrgent':
        dispatch({
          type: AddToImportantButNotUrgent,
          newItem: newElement,
        });
        setrefresh(refresh + 1);
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
        backgroundColor: '#ecf0f1',
        margin: 4,
      }}>
      {/* TOP -  */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginVertical: 4,
        }}>
        {/* 1 : ImportantAndUrgent */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#ACCE23',
            marginHorizontal: 2,
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
            data={ListsReducer.ImportantAndUrgent}
            keyExtractor={(item, index) => index.toString()}
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
                          dispatch({
                            type: DeleteFromImportantAndUrgent,
                            selectedItem: item,
                          });
                          setrefresh(refresh + 1);
                        },
                      },
                    ]);
                  }}
                  style={{
                    padding: 5,
                    marginVertical: 2,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'left',
                    }}>
                    {' '}
                    {item.title}{' '}
                  </Text>
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
            marginHorizontal: 2,
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
            data={ListsReducer.ImportantButNotUrgent}
            keyExtractor={(item, index) => index.toString()}
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
                          dispatch({
                            type: DeleteFromImportantButNotUrgent,
                            selectedItem: item,
                          });
                          setrefresh(refresh + 1);
                        },
                      },
                    ]);
                  }}
                  style={{
                    padding: 5,
                    marginVertical: 2,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'left',
                    }}>
                    {' '}
                    {item.title}{' '}
                  </Text>
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
          flexDirection: 'row',
        }}>
        {/* 1 : NotImportantButUrgent */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#FCBF08',
            marginHorizontal: 2,
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
            keyExtractor={(item, index) => index.toString()}
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
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'left',
                    }}>
                    {' '}
                    {item.title}{' '}
                  </Text>
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
            marginHorizontal: 2,
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
            keyExtractor={(item, index) => index.toString()}
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
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'left',
                    }}>
                    {' '}
                    {item.title}{' '}
                  </Text>
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
