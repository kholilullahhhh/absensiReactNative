import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AttendanceTrackingScreen from '../screens/AttendanceTrackingScreen';
import AttendanceHistoryScreen from '../screens/AttendanceHistoryScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import AbsenceHistoryScreen from '../screens/AbsenceHistoryScreen';
import AttendanceHistory from '../components/AttendanceHistory';
import AbsenceFeature from '../components/AbsenceFeature';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="AttendanceTracking" component={AttendanceTrackingScreen} />
      <Stack.Screen name="AttendanceHistory" component={AttendanceHistoryScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="AbsenceHistory" component={AbsenceHistoryScreen} />
      <Stack.Screen name="AbsenceFeature" component={AbsenceFeature} />
    </Stack.Navigator>
  );
};

export default AppNavigator;