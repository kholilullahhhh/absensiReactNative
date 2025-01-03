import React, { useState } typescript;
import React, { useState } from 'react';
import { View, Button, Text, DatePickerIOS } from 'react-native';
import { db } from '../utils/firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore';
import { auth } from '../utils/firebase'; // Import Firebase auth

const AttendanceTrackingScreen: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<string>('Present');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmitAttendance = async () => {
    const user = auth.currentUser ;
    if (user) {
      try {
        await addDoc(collection(db, 'attendance'), {
          userId: user.uid,
          date: date.toISOString().split('T')[0], // Store date in YYYY-MM-DD format
          status,
        });
        setMessage('Attendance recorded successfully!');
        setError(null);
      } catch (err) {
        setError(err.message);
        setMessage(null);
      }
    } else {
      setError('User  not authenticated');
    }
  };

  return (
    <View>
      <Text>Select Date:</Text>
      <DatePickerIOS
        date={date}
        onDateChange={setDate}
      />
      <Text>Status:</Text>
      <Button title="Present" onPress={() => setStatus('Present')} />
      <Button title="Absent" onPress={() => setStatus('Absent')} />
      <Button title="Submit Attendance" onPress={handleSubmitAttendance} />
      {message && <Text>{message}</Text>}
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default AttendanceTrackingScreen;