import { StyleSheet, Text, View } from 'react-native';

import type { ScheduleType } from '@/mock/schedule';

export default function CalendarListContents({
  mockSchedules,
  currentDate,
}: {
  mockSchedules: ScheduleType[];
  currentDate: Date;
}) {
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  return (
    <View style={styles.listContainer}>
      {/* 日ごとにグループ化して表示 */}
      {Array.from({ length: getDaysInMonth(currentDate) }, (_, i) => i + 1).map(
        day => {
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
                        <Text style={styles.timeText}>
                          {schedule.startTime}
                        </Text>
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
        }
      )}
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
    color: '#C7C7CC',
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
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 }, // 右下方向にシャドウ
    elevation: 2,
  },
  schedulePurpose: {
    fontSize: 14,
    color: '#8E8E93',
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
  scheduleTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});
