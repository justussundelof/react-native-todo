import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default function TodoItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Text style={[styles.title, item.done && styles.done]}>{item.title}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
  done: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});
