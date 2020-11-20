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
  BackToSignInButton,
  BackToSignInText,
} from './styles';

const SignUp: React.FC = () => (
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
          <Title>Register</Title>

          <Input name="name" icon="user" placeholder="Name" />
          <Input name="email" icon="mail" placeholder="Email" />
          <Input name="password" icon="lock" placeholder="Password" />

          <Button onPress={() => console.log('Sign in')}>Sign up</Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <BackToSignInButton onPress={() => console.log('Sign up')}>
      <Icon name="arrow-left" size={20} color="#fff" />
      <BackToSignInText>Back to login</BackToSignInText>
    </BackToSignInButton>
  </>
);

export default SignUp;
