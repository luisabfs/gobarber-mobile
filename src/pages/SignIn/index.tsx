import React from 'react';
import { Image } from 'react-native';

import { Input, Button } from '../../components';

import logo from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logo} />
    <Title>Login</Title>

    <Input name="email" icon="mail" placeholder="Email" />
    <Input name="password" icon="lock" placeholder="Password" />

    <Button onPress={() => console.log('Button')}>Sign in</Button>
  </Container>
);

export default SignIn;
