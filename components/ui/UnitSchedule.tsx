import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useDayStore } from '@/hooks/use-store';
import type { ScheduleType } from '@/mock/schedule';

export default function UnitSchedule({
  mockSchedules,
}: {
  mockSchedules: ScheduleType[];
}) {
  const { currentYear, currentMonth, currentDate } = useDayStore();

  // 選択したセルの日付に対応するスケジュールを抽出
  const selectedSchedules = useMemo(() => {
    return mockSchedules.filter(schedule => schedule.date === currentDate);
  }, [currentDate, mockSchedules]);

  // スケジュールがない場合は何も表示しない
  if (selectedSchedules.length === 0) {
    return null;
  }

  return (
    <View style={styles.selectedDateSection}>
      <Text style={styles.selectedDateText}>
        {currentYear}年{currentMonth + 1}月{currentDate}日 (火)
      </Text>
      {selectedSchedules.map(schedule => (
        <View key={schedule.id} style={styles.scheduleDetail}>
          <View style={styles.scheduleTime}>
            <Text style={styles.timeText}>{schedule.startTime}</Text>
            <Text style={styles.timeSeparator}>-</Text>
            <Text style={styles.timeText}>{schedule.endTime}</Text>
          </View>
          <Text style={styles.schedulePurpose}>{schedule.purpose}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleDetail: {
    marginBottom: 16,
  },
  scheduleTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 16,
    color: '#1C1C1E',
    fontWeight: '500',
  },
  timeSeparator: {
    fontSize: 16,
    color: '#8E8E93',
    marginHorizontal: 8,
  },
  schedulePurpose: {
    fontSize: 14,
    color: '#8E8E93',
  },
  selectedDateSection: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  selectedDateText: {
    fontSize: 16,
    color: '#8E8E93',
    marginBottom: 16,
  },
});
