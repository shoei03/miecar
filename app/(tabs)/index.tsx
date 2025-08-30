import { useEffect, useMemo } from 'react';
import { Button, Modal, SafeAreaView, StyleSheet } from 'react-native';

import CalendarHeader from '@/components/CalendarHeader';
import CalendarView from '@/components/CalendarView';
import ModalContents from '@/components/ui/ModalContents';
import { Colors } from '@/constants/Colors';
import { useDayStore } from '@/hooks/use-store';
import { mockSchedules, type ScheduleType } from '@/mock/schedule'; // モックデータのインポート

export default function HomeScreen() {
  const {
    currentMonth,
    currentYear,
    isModalVisible,
    setMockSchedules,
    setModalVisible,
  } = useDayStore();

  const filteredSchedules: ScheduleType[] = useMemo(
    () =>
      mockSchedules.filter(
        schedule =>
          schedule.month === currentMonth && schedule.year === currentYear
      ),
    [currentMonth, currentYear]
  );

  useEffect(() => {
    setMockSchedules(filteredSchedules);
  }, [setMockSchedules, filteredSchedules]);

  return (
    <SafeAreaView style={styles.container}>
      {/* ヘッダー */}
      <CalendarHeader />

      {/* カレンダーのコンテンツ */}
      <CalendarView />

      {/* 予定を追加するボタン */}
      <Button title='予定を追加' onPress={() => setModalVisible(true)} />

      {/* 予定追加モーダル */}
      <Modal
        visible={isModalVisible}
        animationType='slide'
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContents />
      </Modal>
    </SafeAreaView>
  );
}

// メイン画面のスタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.subBackground,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
