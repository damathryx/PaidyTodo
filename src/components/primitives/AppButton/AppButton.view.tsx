import React from 'react';
import { Button, ButtonContainer, ButtonText } from './AppButton.style';
import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

type AppButtonProps = {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;

const AppButtonView = ({ label, containerStyle, ...props }: AppButtonProps) => {
  return (
    <ButtonContainer style={containerStyle}>
      <Button {...props}>
        <ButtonText>{label}</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

export default AppButtonView;
