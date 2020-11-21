import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

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

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(data => console.log(data), []);

  return (
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

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                icon="mail"
                name="email"
                placeholder="Email"
                autoCorrect={false}
                returnKeyType="next"
                autoCapitalize="none"
                keyboardType="email-address"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                icon="lock"
                name="password"
                secureTextEntry
                returnKeyType="send"
                placeholder="Password"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Sign in
              </Button>
            </Form>

            <ForgotPasswordButton onPress={() => console.log('Button')}>
              <ForgotPasswordText>Forgot password</ForgotPasswordText>
            </ForgotPasswordButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <SignUpButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <SignUpText>Create account</SignUpText>
      </SignUpButton>
    </>
  );
};

export default SignIn;
