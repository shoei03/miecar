import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ModalContents from '@/components/ui/ModalContents';
import ToggleGroups from '@/components/ui/ToggleGroups';

interface Schedule {
  id: string;
  userId: string;
  userName: string;
  startTime: string;
  endTime: string;
  purpose: string;
  color: string;
  date: number;
}

const mockSchedules: Schedule[] = [
  {
    id: '1',
    userId: '1',
    userName: 'お父さん',
    startTime: '15:30',
    endTime: '20:00',
    purpose: 'ソフトボードカフェ',
    color: '#34C759',
    date: 8,
  },
  {
    id: '2',
    userId: '2',
    userName: 'お母さん',
    startTime: '10:00',
    endTime: '12:00',
    purpose: '買い物',
    color: '#FF9500',
    date: 5,
  },
  {
    id: '3',
    userId: '3',
    userName: '子供A',
    startTime: '13:00',
    endTime: '15:00',
    purpose: 'サッカー',
    color: '#007AFF',
    date: 12,
  },
  {
    id: '4',
    userId: '4',
    userName: '子供B',
    startTime: '09:00',
    endTime: '11:00',
    purpose: 'ピアノ教室',
    color: '#AF52DE',
    date: 8,
  },
  {
    id: '5',
    userId: '1',
    userName: 'お父さん',
    startTime: '18:00',
    endTime: '19:00',
    purpose: '会議',
    color: '#34C759',
    date: 20,
  },
  {
    id: '6',
    userId: '2',
    userName: 'お母さん',
    startTime: '14:00',
    endTime: '16:00',
    purpose: '友達とランチ',
    color: '#FF9500',
    date: 15,
  },
  {
    id: '7',
    userId: '3',
    userName: '子供A',
    startTime: '16:00',
    endTime: '18:00',
    purpose: '塾',
    color: '#007AFF',
    date: 22,
  },
  {
    id: '8',
    userId: '4',
    userName: '子供B',
    startTime: '11:00',
    endTime: '12:00',
    purpose: '図書館',
    color: '#AF52DE',
    date: 25,
  },
];

export default function HomeScreen() {
  const [currentDate] = useState(new Date()); // 現在日付
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar'); // 表示モード追加
  const [modalVisible, setModalVisible] = useState(false);

  const formatMonthYear = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // 週の最初の空白セル
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.emptyDay} />);
    }

    // 日付セル
    for (let day = 1; day <= daysInMonth; day++) {
      const hasSchedule = mockSchedules.some(schedule => schedule.date === day);
      const isSelected = selectedDate === day;
      const isToday = day === 8; // サンプルでは8日が今日

      days.push(
        <TouchableOpacity
          key={day}
          style={[
            styles.dayCell,
            isSelected && styles.selectedDay,
            isToday && styles.todayCell,
          ]}
          onPress={() => setSelectedDate(day)}
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

    return days;
  };

  const getSelectedSchedules = () => {
    return mockSchedules.filter(schedule => schedule.date === selectedDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ヘッダー */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ToggleGroups viewMode={viewMode} setViewMode={setViewMode} />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerMonthText}>
            {formatMonthYear(currentDate)}
          </Text>
        </View>
        <View style={styles.headerRight}>
          {/* TODO:家族カレンダーの切り替えボタンを設置 */}
        </View>
      </View>

      {/* 表示切り替え */}
      {viewMode === 'calendar' ? (
        <>
          <View style={styles.calendar}>
            <View style={styles.weekDays}>
              {['日', '月', '火', '水', '木', '金', '土'].map(day => (
                <Text key={day} style={styles.weekDayText}>
                  {day}
                </Text>
              ))}
            </View>
            <View style={styles.daysContainer}>{renderCalendar()}</View>
          </View>
          <View style={styles.calendarDivider} />
        </>
      ) : (
        <View style={styles.listContainer}>
          {/* 日ごとにグループ化して表示 */}
          {Array.from(
            { length: getDaysInMonth(currentDate) },
            (_, i) => i + 1
          ).map(day => {
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
                          <Text style={styles.timeText}>
                            {schedule.endTime}
                          </Text>
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
      )}

      {/* 選択された日の詳細（カレンダー表示時のみ） */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {viewMode === 'calendar' && (
          <View style={styles.selectedDateSection}>
            <Text style={styles.selectedDateText}>
              {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
              {selectedDate}日 (火)
            </Text>
            {getSelectedSchedules().length > 0 ? (
              <View>
                {getSelectedSchedules().map(schedule => (
                  <View key={schedule.id} style={styles.scheduleDetail}>
                    <View style={styles.scheduleTime}>
                      <Text style={styles.timeText}>{schedule.startTime}</Text>
                      <Text style={styles.timeSeparator}>-</Text>
                      <Text style={styles.timeText}>{schedule.endTime}</Text>
                    </View>
                    <Text style={styles.schedulePurpose}>
                      {schedule.purpose}
                    </Text>
                  </View>
                ))}
                <TouchableOpacity
                  style={styles.addScheduleButton}
                  onPress={() => setModalVisible(true)}
                >
                  <Ionicons name='add' size={20} color='#34C759' />
                  <Text style={styles.addScheduleText}>予定を追加</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.addScheduleButton}
                onPress={() => setModalVisible(true)}
              >
                <Ionicons name='add' size={20} color='#34C759' />
                <Text style={styles.addScheduleText}>予定を追加</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </ScrollView>
      {/* 予定追加モーダル */}
      <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContents setModalVisible={setModalVisible} />
      </Modal>
    </SafeAreaView>
  );
}

// メイン画面のスタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    paddingTop: 16,
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-start',
  },
  headerCenter: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerMonthText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
  },
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
  dayCell: {
    width: '14.285%', // 7分の1
    aspectRatio: 1.2, // セルを少し縦長に
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 16, // 下の余白を増やす
  },
  emptyDay: {
    width: '14.285%',
    aspectRatio: 1.2,
  },
  dayText: {
    fontSize: 16,
    color: '#1C1C1E',
  },
  selectedDay: {
    backgroundColor: '#daf5e0ff',
    borderRadius: 10, // セルが大きくなった分調整
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
    fontWeight: '600',
  },
  scheduleIndicator: {
    position: 'absolute',
    bottom: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#34C759',
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
  addScheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  addScheduleText: {
    fontSize: 16,
    color: '#34C759',
    marginLeft: 8,
    fontWeight: '500',
  },
  bottomTabs: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    paddingTop: 8,
    paddingBottom: 24, // SafeAreaの代わり
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  tabText: {
    fontSize: 10,
    color: '#8E8E93',
    marginTop: 4,
  },
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
  listDayText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8E8E93',
  },
  listSchedulesBox: {
    flex: 1,
    gap: 8,
    minHeight: 40,
    justifyContent: 'center', // 予定なしを上下中央に
  },
  listNoSchedule: {
    color: '#C7C7CC',
    fontSize: 14,
    fontStyle: 'italic',
    textAlignVertical: 'center', // Android用
    textAlign: 'left', // iOS用 左詰め
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
  listScheduleName: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 2,
  },
  modalAddButtonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
    marginBottom: 56, // タブ分の余白を追加
  },
  calendarDivider: {
    height: 1,
    backgroundColor: '#E5E5EA',
    marginHorizontal: 20,
    marginBottom: 8,
  },
});
