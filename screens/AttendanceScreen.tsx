import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../utils/firebase'; // Import Firestore
import { collection, getDocs } from 'firebase/firestore';

const AttendanceHistory: React.FC = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<any[]>([]);

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      const recordsCollection = collection(db, 'attendance');
      const recordsSnapshot = await getDocs(recordsCollection);
      const recordsList = recordsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAttendanceRecords(recordsList);
    };

    fetchAttendanceRecords();
  }, []);

  return (
    <View>
      <Text>Attendance History</Text>
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

export default AttendanceHistory;