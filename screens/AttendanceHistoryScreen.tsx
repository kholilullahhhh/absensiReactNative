import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../utils/firebase'; // Import Firestore
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth } from '../utils/firebase'; // Import Firebase auth

const AttendanceHistoryScreen: React.FC = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      const user = auth.currentUser ;
      if (user) {
        try {
          const recordsQuery = query(collection(db, 'attendance'), where('userId', '==', user.uid));
          const recordsSnapshot = await getDocs(recordsQuery);
          const recordsList = recordsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setAttendanceRecords(recordsList);
        } catch (err) {
          setError(err.message);
        }
      }
    };

    fetchAttendanceRecords();
  }, []);

  return (
    <View>
      <Text>Attendance History</Text>
      {error && <Text>{error}</Text>}
      <FlatList
        data={attendanceRecords}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.date}: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AttendanceHistoryScreen;