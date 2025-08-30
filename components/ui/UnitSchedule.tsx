import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useDayStore } from '@/hooks/use-store';

export default function UnitSchedule() {
  const { currentYear, currentMonth, currentDate, mockSchedules } =
    useDayStore();

  const router = useRouter();
  const handleDetailSchedule = () => {
    router.push('/(schedule)/edit');
  };

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
        <TouchableOpacity
          key={schedule.id}
          style={styles.scheduleDetail}
          onPress={handleDetailSchedule}
        >
          <View style={styles.scheduleTime}>
            <Text style={styles.timeText}>{schedule.startTime}</Text>
            <Text style={styles.timeSeparator}>-</Text>
            <Text style={styles.timeText}>{schedule.endTime}</Text>
          </View>
          <Text style={styles.schedulePurpose}>{schedule.purpose}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleDetail: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: Colors.light.background,
    shadowColor: Colors.light.shadow,
    borderRadius: 12,
  },
  scheduleTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 16,
    color: Colors.light.text,
    fontWeight: '500',
  },
  timeSeparator: {
    fontSize: 16,
    color: Colors.light.subText,
    marginHorizontal: 8,
  },
  schedulePurpose: {
    fontSize: 14,
    color: Colors.light.subText,
  },
  selectedDateSection: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  selectedDateText: {
    fontSize: 16,
    color: Colors.light.subText,
    marginBottom: 16,
  },
});
