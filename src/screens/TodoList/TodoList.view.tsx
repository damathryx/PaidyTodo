import React, { createRef, useState } from 'react';
import { useStore } from 'effector-react';
import AppButton from '../../components/primitives/AppButton';
import {
  addTodo,
  removeTodo,
  TodosStore,
  updateTodo,
} from '../../effector/todos';
import {
  Container,
  Input,
  InputContainer,
  Title,
  TodoList,
} from './TodoList.style';
import TodoItem from '../../components/modules/TodoItem';
import { TextInput } from 'react-native';

const TodoListView = () => {
  const textInputRef = createRef<TextInput>();
  const todos = useStore(TodosStore);
  const [text, setText] = useState('');
  const [toUpdateTodo, setToUpdateTodo] = useState<number>();

  const onSubmit = () => {
    // text must not be empty or white space
    if (text.trim()) {
      // if toUpdateTodo has value update instead
      if (toUpdateTodo !== undefined) {
        updateTodo({ label: text, index: toUpdateTodo });
        setToUpdateTodo(undefined);
      } else {
        addTodo(text);
      }
      setText('');
    }
  };

  const onItemPress = (label: string, index: number) => {
    setText(label);
    setToUpdateTodo(index);
    textInputRef.current?.focus();
  };

  return (
    <Container>
      <Title>TODO:</Title>
      <TodoList
        data={todos}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item, index }) => (
          <TodoItem
            label={item}
            onPress={() => onItemPress(item, index)}
            onRemove={() => removeTodo(index)}
          />
        )}
      />
      <InputContainer>
        <Input
          ref={textInputRef}
          value={text}
          onChangeText={setText}
          placeholder="Enter here"
        />
        <AppButton
          label={toUpdateTodo !== undefined ? 'Update' : 'Add'}
          onPress={onSubmit}
        />
      </InputContainer>
    </Container>
  );
};

export default TodoListView;
