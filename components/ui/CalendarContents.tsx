import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Schedule {
  id: string;
  userId: string;
  userName: string;
  startTime: string;
  endTime: string;
  purpose: string;
  color: string;
  date: number;
}

const mockSchedules: Schedule[] = [
  {
    id: '1',
    userId: '1',
    userName: 'お父さん',
    startTime: '15:30',
    endTime: '20:00',
    purpose: 'ソフトボードカフェ',
    color: '#34C759',
    date: 8,
  },
  {
    id: '2',
    userId: '2',
    userName: 'お母さん',
    startTime: '10:00',
    endTime: '12:00',
    purpose: '買い物',
    color: '#FF9500',
    date: 5,
  },
  {
    id: '3',
    userId: '3',
    userName: '子供A',
    startTime: '13:00',
    endTime: '15:00',
    purpose: 'サッカー',
    color: '#007AFF',
    date: 12,
  },
  {
    id: '4',
    userId: '4',
    userName: '子供B',
    startTime: '09:00',
    endTime: '11:00',
    purpose: 'ピアノ教室',
    color: '#AF52DE',
    date: 8,
  },
  {
    id: '5',
    userId: '1',
    userName: 'お父さん',
    startTime: '18:00',
    endTime: '19:00',
    purpose: '会議',
    color: '#34C759',
    date: 20,
  },
  {
    id: '6',
    userId: '2',
    userName: 'お母さん',
    startTime: '14:00',
    endTime: '16:00',
    purpose: '友達とランチ',
    color: '#FF9500',
    date: 15,
  },
  {
    id: '7',
    userId: '3',
    userName: '子供A',
    startTime: '16:00',
    endTime: '18:00',
    purpose: '塾',
    color: '#007AFF',
    date: 22,
  },
  {
    id: '8',
    userId: '4',
    userName: '子供B',
    startTime: '11:00',
    endTime: '12:00',
    purpose: '図書館',
    color: '#AF52DE',
    date: 25,
  },
];

const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

export default function CalendarContents() {
  const [currentDate] = useState(new Date()); // 現在日付
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  // 週の最初の空白セル
  for (let i = 0; i < firstDay; i++) {
    days.push(<View key={`empty-${i}`} style={styles.emptyDay} />);
  }

  // 日付セル
  for (let day = 1; day <= daysInMonth; day++) {
    const hasSchedule = mockSchedules.some(schedule => schedule.date === day);
    const isSelected = selectedDate === day;
    const isToday = day === 8; // サンプルでは8日が今日

    days.push(
      <TouchableOpacity
        key={day}
        style={[
          styles.dayCell,
          isSelected && styles.selectedDay,
          isToday && styles.todayCell,
        ]}
        onPress={() => setSelectedDate(day)}
      >
        <Text
          style={[
            styles.dayText,
            isSelected && styles.selectedDayText,
            isToday && styles.todayText,
          ]}
        >
          {day}
        </Text>
        {hasSchedule && <View style={styles.scheduleIndicator} />}
      </TouchableOpacity>
    );
  }

  return days;
}

const styles = StyleSheet.create({
  dayCell: {
    width: '14.285%', // 7分の1
    aspectRatio: 1.2, // セルを少し縦長に
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 16, // 下の余白を増やす
  },
  dayText: {
    fontSize: 16,
    color: '#1C1C1E',
  },
  selectedDay: {
    backgroundColor: '#daf5e0ff',
    borderRadius: 10, // セルが大きくなった分調整
  },
  selectedDayText: {
    color: 'black',
    fontWeight: '600',
  },
  todayCell: {
    borderColor: '#34C759',
    borderRadius: 28,
  },
  todayText: {
    fontWeight: '600',
  },
  scheduleIndicator: {
    position: 'absolute',
    bottom: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#34C759',
  },
  emptyDay: {
    width: '14.285%',
    aspectRatio: 1.2,
  },
});
