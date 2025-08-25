import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import CalendarContents from '@/components/ui/CalendarContents';
import CalendarListContents from '@/components/ui/CalendarListContents';
import UnitSchedule from '@/components/ui/UnitSchedule';
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
  const today = new Date();
  const [selectedDate] = useState(today.getDate());

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

      {/* カレンダーとリストの間の区切り線 */}
      <View style={styles.calendarDivider} />

      {/* 選択された日の詳細（カレンダー表示時のみ） */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {viewMode === 'calendar' && (
          <View style={styles.selectedDateSection}>
            <Text style={styles.selectedDateText}>
              {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
              {selectedDate}日 (火)
            </Text>
            <UnitSchedule
              mockSchedules={mockSchedules}
              selectedDate={selectedDate}
            />
          </View>
        )}
      </ScrollView>
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
  content: {
    flex: 1,
  },
  calendarDivider: {
    height: 1,
    backgroundColor: '#E5E5EA',
    marginHorizontal: 20,
    marginBottom: 8,
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
