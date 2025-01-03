import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '../utils/firebase'; // Import Firebase auth
import { updateProfile } from 'firebase/auth';

const ProfileScreen: React.FC = () => {
  const user = auth.currentUser ;
  const [displayName, setDisplayName] = useState<string>(user?.displayName || '');
  const [error, setError] = useState<string | null>(null);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        await updateProfile(user, { displayName });
        alert('Profile updated successfully!');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <View>
      <Text>Profile</Text>
      <TextInput
        placeholder="Display Name"
        value={displayName}
        onChangeText={setDisplayName}
      />
      {error && <Text>{error}</Text>}
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

export default ProfileScreen;