import React, {useState} from 'react';
import {View, Text} from 'react-native';

export default function App() {
  // variables  :
  const [ImportantAndUrgent, setImportantAndUrgent] = useState([]);
  const [ImportantButNotUrgent, setImportantButNotUrgent] = useState([]);
  const [NotImportantButUrgent, setNotImportantButUrgent] = useState([]);
  const [NotImportantAndNotUrgent, setNotImportantAndNotUrgent] = useState([]);
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
        {/* 1 */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'pink',
          }}></View>

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
    </View>
  );
}
