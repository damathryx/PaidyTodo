import React from 'react';

import * as LocalAuthentication from 'expo-local-authentication';
import * as IntentLauncher from 'expo-intent-launcher';
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  SetupText,
} from './Landing.style';
import { Alert, Linking, Platform } from 'react-native';

const LandingView = () => {
  const onPress = async () => {
    const res = await LocalAuthentication.authenticateAsync();
    if (!res.success) {
      if (res.error === 'not_enrolled') {
        Platform.OS === 'ios'
          ? Linking.openURL('app-settings:')
          : IntentLauncher.startActivityAsync(
              IntentLauncher.ActivityAction.SECURITY_SETTINGS,
            );
      } else {
        Alert.alert('Error', res.error);
      }
    } else {
      Alert.alert('nice');
    }
  };
  return (
    <Container>
      <SetupText>Setup Authentication to Proceed</SetupText>
      <ButtonContainer>
        <Button onPress={onPress}>
          <ButtonText>Go To Settings</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingView;
