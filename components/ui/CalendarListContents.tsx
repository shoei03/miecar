import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useDayStore } from '@/hooks/use-store';

export default function CalendarListContents() {
  const {
    daysInMonth,
    currentYear,
    currentMonth,
    setDaysInMonth,
    mockSchedules,
  } = useDayStore();

  useEffect(() => {
    setDaysInMonth(currentYear, currentMonth);
  }, [setDaysInMonth, currentYear, currentMonth]);

  return (
    <View style={styles.listContainer}>
      {/* 日ごとにグループ化して表示 */}
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
        // TODO: mockScheduleが変更された時だけ実行するようにする
        const schedules = mockSchedules.filter(s => s.date === day);
        return (
          <View key={day} style={styles.listDayRow}>
            <View style={styles.listDayBox}>
              <Text style={styles.listDayText}>{day}</Text>
            </View>
            <View style={styles.listSchedulesBox}>
              {schedules.length === 0 ? (
                <Text style={styles.listNoSchedule}>予定なし</Text>
              ) : (
                schedules.map(schedule => (
                  <View key={schedule.id} style={styles.listScheduleItem}>
                    <Text
                      style={[
                        styles.listScheduleName,
                        { color: schedule.color },
                      ]}
                    >
                      {schedule.userName}
                    </Text>
                    <View style={styles.scheduleTime}>
                      <Text style={styles.timeText}>{schedule.startTime}</Text>
                      <Text style={styles.timeSeparator}>-</Text>
                      <Text style={styles.timeText}>{schedule.endTime}</Text>
                    </View>
                    <Text style={styles.schedulePurpose}>
                      {schedule.purpose}
                    </Text>
                  </View>
                ))
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  listDayRow: {
    flexDirection: 'row',
    alignItems: 'center', // 日付と予定なしの上下を揃える
    marginBottom: 12,
  },
  listDayBox: {
    minWidth: 36,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  listSchedulesBox: {
    flex: 1,
    gap: 8,
    minHeight: 40,
    justifyContent: 'center', // 予定なしを上下中央に
  },
  listDayText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8E8E93',
  },
  listNoSchedule: {
    color: Colors.light.subText,
    fontSize: 14,
    fontStyle: 'italic',
    textAlignVertical: 'center', // Android用
    textAlign: 'left', // iOS用 左詰め
  },
  listScheduleName: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 2,
  },
  listScheduleItem: {
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    padding: 8,
    marginBottom: 4,
    shadowColor: Colors.light.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 }, // 右下方向にシャドウ
    elevation: 4,
  },
  schedulePurpose: {
    fontSize: 14,
    color: Colors.light.subText,
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
  scheduleTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});
