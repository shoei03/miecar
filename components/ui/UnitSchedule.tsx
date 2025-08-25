import { StyleSheet, Text, View } from 'react-native';

import type { ScheduleType } from '@/mock/schedule';

export default function UnitSchedule({
  mockSchedules,
  selectedDate,
}: {
  mockSchedules: ScheduleType[];
  selectedDate: number;
}) {
  const getSelectedSchedules = () => {
    return mockSchedules.filter(schedule => schedule.date === selectedDate);
  };

  return (
    <>
      {getSelectedSchedules().length > 0 && (
        <View>
          {getSelectedSchedules().map(schedule => (
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
      )}
    </>
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
});
