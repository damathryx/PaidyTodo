import AsyncStorage from '@react-native-community/async-storage';

import { createEvent, createStore } from 'effector';
import asyncStorageKeys from '../constants/asyncStorageKeys';

// events
export const setTodos = createEvent<string[]>('set todos');
export const addTodo = createEvent<string>('add todo');
export const removeTodo = createEvent<number>('remove todo');
export const updateTodo = createEvent<{ label: string; index: number }>(
  'update todo',
);

const initialState: string[] = [];

// store
export const TodosStore = createStore(initialState, { name: 'authStore' })
  // overwrite the list
  .on(setTodos, (_, todo) => todo)
  // add a todo at the end of the list
  .on(addTodo, (todoList, newTodo) => [...todoList, newTodo])
  // remove a todo via index
  .on(removeTodo, (todoList, index) => [
    ...todoList.slice(0, index),
    ...todoList.slice(index + 1),
  ])
  // update todo via index
  .on(updateTodo, (todoList, param) => {
    const newTodoList = [...todoList];
    newTodoList[param.index] = param.label;
    return newTodoList;
  });

// save todos in local storage to persist on next session or app restart
TodosStore.watch((todos) => {
  AsyncStorage.setItem(asyncStorageKeys.TODOS, JSON.stringify(todos || []));
});
