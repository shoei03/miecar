import { memo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import CalendarContents from '@/components/ui/CalendarContents';
import CalendarListContents from '@/components/ui/CalendarListContents';
import UnitSchedule from '@/components/ui/UnitSchedule';
import { Colors } from '@/constants/Colors';
import { useDayStore } from '@/hooks/use-store';

const CalendarView = memo(function CalendarView() {
  const { viewMode } = useDayStore();
  return (
    <>
      {viewMode === 'calendar' ? (
        <>
          {/* カレンダー */}
          <View style={styles.calendar}>
            <CalendarContents />
          </View>

          {/* カレンダーの区切り線 */}
          <View style={styles.calendarDivider} />

          {/* スケジュールの詳細 */}
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <UnitSchedule />
          </ScrollView>
        </>
      ) : (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <CalendarListContents />
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
    backgroundColor: Colors.light.subText,
    marginHorizontal: 20,
    marginBottom: 8,
  },
});
