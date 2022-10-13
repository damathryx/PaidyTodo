import styled from '@emotion/native';

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
`;

export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #0145a6;
`;

export const Label = styled.Text`
  color: #444;
  font-size: 14px;
  margin-left: 20px;
  flex: 1;
`;

export const RemoveButtonText = styled.Text`
  text-transform: uppercase;
  color: #444;
  font-size: 12px;
`;
