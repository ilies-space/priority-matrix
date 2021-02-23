import React, {useState} from 'react';
import {View, Text} from 'react-native';

export default function App() {
  // variables  :
  const [ImportantAndUrgent, setImportantAndUrgent] = useState([]);
  const [ImportantButNotUrgent, setImportantButNotUrgent] = useState([]);
  const [NotImportantButUrgent, setNotImportantButUrgent] = useState([]);
  const [NotImportantAndNotUrgent, setNotImportantAndNotUrgent] = useState([]);
  return (
    <View>
      <Text>HOME</Text>
    </View>
  );
}
