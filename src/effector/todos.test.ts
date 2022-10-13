import { addTodo, removeTodo, setTodos, TodosStore, updateTodo } from './todos';

jest.mock('@react-native-community/async-storage', () => {
  return {
    setItem: () => {},
  };
});

describe('Todos', () => {
  it('should display todos from todos store', () => {
    expect(TodosStore.getState()).toEqual([]);
  });

  test('add todos to todo list', () => {
    addTodo('first item');
    addTodo('second item');
    addTodo('third item');
    addTodo('fourth item');
    expect(TodosStore.getState()).toEqual([
      'first item',
      'second item',
      'third item',
      'fourth item',
    ]);
  });

  test('remove todo with index 2 from todo list', () => {
    removeTodo(2);
    expect(TodosStore.getState()).toEqual([
      'first item',
      'second item',
      'fourth item',
    ]);
  });

  test('update todo with index 2', () => {
    updateTodo({
      index: 2,
      label: 'third item',
    });

    expect(TodosStore.getState()).toEqual([
      'first item',
      'second item',
      'third item',
    ]);
  });

  test('set todo list to empty array', () => {
    setTodos([]);
    expect(TodosStore.getState()).toEqual([]);
  });
});
