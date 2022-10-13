import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Circle, Container, Label, RemoveButtonText } from './TodoItem.style';

type TodoItemProps = {
  label: string;
  onRemove: () => void;
  onPress: () => void;
};

const TodoItemView = (props: TodoItemProps) => {
  return (
    <Container onPress={props.onPress}>
      <Circle />
      <Label>{props.label}</Label>
      <TouchableOpacity
        onPress={props.onRemove}
        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}>
        <RemoveButtonText>remove</RemoveButtonText>
      </TouchableOpacity>
    </Container>
  );
};

export default TodoItemView;
