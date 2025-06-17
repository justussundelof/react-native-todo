import React, { useLayoutEffect, useState } from 'react';
import { Button, View, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddScreen({ todos, setTodos }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const addTodo = () => {
    if (!title.trim()) {
      Alert.alert('Titel krävs');
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      done: false,
      date: new Date().toISOString().split('T')[0],
    };
    setTodos([...todos, newTodo]);
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => ({
        type: 'button',
        props: {
          title: 'Spara',
          onPress: addTodo,
        },
      }),
    });

    // Alternative: If the above does not work, use this:
    navigation.setOptions({
      headerRight: () => (
        <Button title="Spara" onPress={addTodo} />
      ),
    });
  }, [navigation, title, description]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Titel"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Beskrivning"
        value={description}
        onChangeText={setDescription}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
