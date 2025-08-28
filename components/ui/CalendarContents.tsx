import { useMemo, useCallback, memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useDayStore } from '@/hooks/use-store';
import type { ScheduleType } from '@/mock/schedule';

// 日付セルコンポーネント
const DayCell = memo(
  ({
    day,
    isSelected,
    isToday,
    hasSchedule,
    onPress,
  }: {
    day: number;
    isSelected: boolean;
    isToday: boolean;
    hasSchedule: boolean;
    onPress: (day: number) => void;
  }) => {
    return (
      <TouchableOpacity
        style={[
          styles.dayCell,
          isSelected && styles.selectedDay,
          isToday && styles.todayCell,
        ]}
        onPress={() => onPress(day)}
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
);
DayCell.displayName = 'DayCell';

export default function CalendarContents({
  mockSchedules,
}: {
  mockSchedules: ScheduleType[];
}) {
  const {
    currentDate,
    currentYear,
    currentMonth,
    initialDate,
    daysInMonth,
    firstDayOfMonth,
    setCurrentDate,
    setDaysInMonth,
    setFirstDayOfMonth,
  } = useDayStore();

  // 日付計算
  useMemo(() => {
    setDaysInMonth(currentYear, currentMonth);
    setFirstDayOfMonth(currentYear, currentMonth);
  }, [setDaysInMonth, setFirstDayOfMonth, currentYear, currentMonth]);

  // スケジュールがある日をセットで管理
  const scheduleDays = useMemo(() => {
    return new Set(mockSchedules.map(schedule => schedule.date));
  }, [mockSchedules]);

  // セルがクリックされた時の処理
  const handleDateSelect = useCallback(
    (day: number) => {
      setCurrentDate(day);
    },
    [setCurrentDate]
  );

  return (
    <>
      <View style={styles.weekDays}>
        {['日', '月', '火', '水', '木', '金', '土'].map(day => (
          <Text key={day} style={styles.weekDayText}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.daysContainer}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {/* 空のセル */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <View key={`empty-day-${i + 1}`} style={styles.emptyDay} />
          ))}
          {/* 日付セル */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            return (
              <DayCell
                key={`day-${day}`}
                day={day}
                isSelected={currentDate === day}
                isToday={initialDate === day}
                hasSchedule={scheduleDays.has(day)}
                onPress={handleDateSelect}
              />
            );
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  weekDayText: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 8,
  },
  dayCell: {
    width: '14.285%', // 7分の1
    aspectRatio: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 16,
  },
  dayText: {
    fontSize: 16,
    color: '#1C1C1E',
  },
  selectedDay: {
    backgroundColor: '#daf5e0ff',
    borderRadius: 10,
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
    fontWeight: '800',
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
