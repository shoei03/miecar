import { memo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import CalendarContents from '@/components/ui/CalendarContents';
import CalendarListContents from '@/components/ui/CalendarListContents';
import UnitSchedule from '@/components/ui/UnitSchedule';
import { useDayStore } from '@/hooks/use-store';
import type { ScheduleType } from '@/mock/schedule';

const CalendarView = memo(function CalendarView({
  mockSchedules,
}: {
  mockSchedules: ScheduleType[];
}) {
  const { viewMode } = useDayStore();
  return (
    <>
      {viewMode === 'calendar' ? (
        <>
          {/* カレンダー */}
          <View style={styles.calendar}>
            <CalendarContents mockSchedules={mockSchedules} />
          </View>

          {/* カレンダーの区切り線 */}
          <View style={styles.calendarDivider} />

          {/* スケジュールの詳細 */}
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <UnitSchedule mockSchedules={mockSchedules} />
          </ScrollView>
        </>
      ) : (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <CalendarListContents mockSchedules={mockSchedules} />
        </ScrollView>
      )}
    </>
  );
});

export default CalendarView;

const styles = StyleSheet.create({
  calendar: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  content: {
    flex: 1,
  },
  calendarDivider: {
    height: 1,
    backgroundColor: '#E5E5EA',
    marginHorizontal: 20,
    marginBottom: 8,
  },
});
