import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '../utils/firebase'; // Import Firebase auth
import { createUser WithEmailAndPassword } from 'firebase/auth';

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      await createUser WithEmailAndPassword(auth, email, password);
      // Navigate to Home screen after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text>{error}</Text>}
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;