import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { todo, setTodos, todos } = route.params;

  const markAsDone = () => {
    const updatedTodos = todos.map(t => t.id === todo.id ? { ...t, done: true } : t);
    setTodos(updatedTodos);
    navigation.goBack();
  };

  const deleteTodo = () => {
    const filtered = todos.filter(t => t.id !== todo.id);
    setTodos(filtered);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.description}>{todo.description}</Text>
      <Text style={styles.date}>Datum: {todo.date}</Text>

      {!todo.done && <Button title="Markera som klar" onPress={markAsDone} />}

      <TouchableOpacity onPress={deleteTodo} style={styles.deleteButton}>
        <Text style={styles.deleteText}>🗑️ Ta bort</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  deleteButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  deleteText: {
    fontSize: 16,
    color: 'red',
  },
});