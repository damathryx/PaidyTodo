import React from 'react';

import * as LocalAuthentication from 'expo-local-authentication';
import * as IntentLauncher from 'expo-intent-launcher';
import { Container, SetupText } from './Landing.style';
import { Alert, Linking, Platform } from 'react-native';
import { login } from '../../effector/auth';
import AppButton from '../../components/primitives/AppButton';

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
      login();
    }
  };
  return (
    <Container>
      <SetupText>Setup Authentication to Proceed</SetupText>
      <AppButton label="Go To Settings" onPress={onPress} />
    </Container>
  );
};

export default LandingView;
