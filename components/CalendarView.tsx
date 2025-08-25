import { StyleSheet, Text, View } from 'react-native';

import CalendarContents from '@/components/ui/CalendarContents';
import CalendarListContents from '@/components/ui/CalendarListContents';
import type { ScheduleType } from '@/mock/schedule';

export default function CalendarView({
  viewMode,
  currentDate,
  mockSchedules,
}: {
  viewMode: 'calendar' | 'list';
  currentDate: Date;
  mockSchedules: ScheduleType[];
}) {
  return (
    <>
      {viewMode === 'calendar' ? (
        <View style={styles.calendar}>
          <View style={styles.weekDays}>
            {['日', '月', '火', '水', '木', '金', '土'].map(day => (
              <Text key={day} style={styles.weekDayText}>
                {day}
              </Text>
            ))}
          </View>
          <View style={styles.daysContainer}>
            <CalendarContents mockSchedules={mockSchedules} />
          </View>
        </View>
      ) : (
        <CalendarListContents
          mockSchedules={mockSchedules}
          currentDate={currentDate}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
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
});
