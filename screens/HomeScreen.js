import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Städa', description: 'Städa beskrivning', done: false, date: '2025-06-12' },
    { id: '2', title: 'Diska', description: 'Diska beskrivning', done: false, date: '2025-06-12' },
    { id: '3', title: 'Handla', description: 'Handla beskrivning', done: true, date: '2025-06-11' },
  ]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.setParams({ setTodos, todos });
    });
    return unsubscribe;
  }, [todos]);

  const renderTodo = ({ item }) => (
    <TodoItem
      item={item}
      onPress={() =>
        navigation.navigate('Detail', {
          todo: item,
          setTodos,
          todos,
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todos</Text>
      <FlatList
        data={todos.filter(todo => !todo.done)}
        renderItem={renderTodo}
        keyExtractor={item => item.id}
      />

      <Text style={styles.heading}>Genomfört</Text>
      <FlatList
        data={todos.filter(todo => todo.done)}
        renderItem={renderTodo}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});
