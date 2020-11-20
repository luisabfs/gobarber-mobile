import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { Input, Button } from '../../components';

import logo from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPasswordButton,
  ForgotPasswordText,
  SignUpButton,
  SignUpText,
} from './styles';

const SignIn: React.FC = () => (
  <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logo} />
          <Title>Login</Title>

          <Input name="email" icon="mail" placeholder="Email" />
          <Input name="password" icon="lock" placeholder="Password" />

          <Button onPress={() => console.log('Sign in')}>Sign in</Button>

          <ForgotPasswordButton onPress={() => console.log('Button')}>
            <ForgotPasswordText>Forgot password</ForgotPasswordText>
          </ForgotPasswordButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <SignUpButton onPress={() => console.log('Sign up')}>
      <Icon name="log-in" size={20} color="#ff9000" />
      <SignUpText>Create account</SignUpText>
    </SignUpButton>
  </>
);

export default SignIn;
