import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      {user ? (
        <Text>User Email: {user.email}</Text>
      ) : (
        <Text>No user is logged in.</Text>
      )}
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Track Attendance" onPress={() => navigation.navigate('AttendanceTracking')} />
      <Button title="View Attendance History" onPress={() => navigation.navigate('AttendanceHistory')} />
      {/* Add navigation to other features */}
    </View>
  );
};

export default HomeScreen;