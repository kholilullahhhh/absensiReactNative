import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { db } from '../utils/firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore';

const AbsenceFeature: React.FC = () => {
  const [reason, setReason] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'absences'), {
        reason,
        date: new Date(),
      });
      setReason('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Reason for Absence"
        value={reason}
        onChangeText={setReason}
      />
      {error && <Text>{error}</Text>}
      <Button title="Submit Absence" onPress={handleSubmit} />
    </View>
  );
};

export default AbsenceFeature;