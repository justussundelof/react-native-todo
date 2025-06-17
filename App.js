import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AddScreen from './screens/AddScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todos"
          options={({ navigation }) => ({
            title: 'Todos',
            headerRight: () => (
              <Button title="Lägg till" onPress={() => navigation.navigate('Add')} />
            ),
          })}
        >
          {(props) => <HomeScreen {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>

        <Stack.Screen name="Detail">
          {(props) => <DetailScreen {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>

        <Stack.Screen name="Add" options={{ presentation: 'modal' }}>
          {(props) => <AddScreen {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
