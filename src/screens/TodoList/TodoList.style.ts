import styled from '@emotion/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #0145a6;
  margin: 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin: 0 5px;
  border-bottom-width: 1px;
  border-bottom-color: #efefef;
`;

export const TodoList = styled(FlatList<string>)`
  flex: 1;
`;

TodoList.defaultProps = {
  contentContainerStyle: {
    paddingHorizontal: 10,
  },
};
