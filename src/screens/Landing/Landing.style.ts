import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 30px;
  font-weight: 700;
`;

export const SetupText = styled.Text`
  text-align: center;
  color: #000;
  font-weight: 500;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #0145a6;
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  font-size: 13px;
  color: white;
  font-weight: 600;
`;
