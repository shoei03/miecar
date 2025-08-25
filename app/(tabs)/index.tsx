import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CalendarHeader from '@/components/CalendarHeader';
import Button from '@/components/ui/Button';
import CalendarContents from '@/components/ui/CalendarContents';
import CalendarListContents from '@/components/ui/CalendarListContents';
import ModalContents from '@/components/ui/ModalContents';
import UnitSchedule from '@/components/ui/UnitSchedule';
import { mockSchedules } from '@/mock/schedule';

export default function HomeScreen() {
  const [currentDate] = useState(new Date()); // 現在日付
  const today = new Date();
  const [selectedDate] = useState(today.getDate());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar'); // 表示モード追加
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* ヘッダー */}
      <CalendarHeader
        currentDate={currentDate}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

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
            <View style={styles.daysContainer}>
              <CalendarContents mockSchedules={mockSchedules} />
            </View>
          </View>
          <View style={styles.calendarDivider} />
        </>
      ) : (
        <CalendarListContents
          mockSchedules={mockSchedules}
          currentDate={currentDate}
        />
      )}

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
            <Button setModalVisible={setModalVisible} label='予定を追加' />
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
  selectedDateSection: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  selectedDateText: {
    fontSize: 16,
    color: '#8E8E93',
    marginBottom: 16,
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
