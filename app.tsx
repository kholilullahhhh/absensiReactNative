import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './utils/firebase';
import { AuthProvider } from './context/AuthContext';

const app = initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;