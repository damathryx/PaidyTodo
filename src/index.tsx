import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LandingScreen from './screens/Landing';
import { useStore } from 'effector-react';
import { AuthStore } from './effector/auth';
import TodoListScreen from './screens/TodoList';
import asyncStorageKeys from './constants/asyncStorageKeys';
import { setTodos } from './effector/todos';

const Root = () => {
  const auth = useStore(AuthStore);

  useEffect(() => {
    const persistTodos = async () => {
      // get saved todos from local storage
      const todos = await AsyncStorage.getItem(asyncStorageKeys.TODOS);
      if (todos) {
        // persist todos to state
        setTodos(JSON.parse(todos));
      }
    };
    persistTodos();
  }, []);

  if (!auth.isAuthenticated) {
    return <LandingScreen />;
  }
  return <TodoListScreen />;
};

export default Root;
