import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { ScheduleType } from '@/mock/schedule';

const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

export default function CalendarContents({
  mockSchedules,
}: {
  mockSchedules: ScheduleType[];
}) {
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
