import React, { useMemo, useEffect, useState } from 'react';
import { Modal, SafeAreaView, StyleSheet } from 'react-native';

import CalendarHeader from '@/components/CalendarHeader';
import CalendarView from '@/components/CalendarView';
import Button from '@/components/ui/Button';
import ModalContents from '@/components/ui/ModalContents';
import { useDayStore } from '@/hooks/use-store';
import { mockSchedules, type ScheduleType } from '@/mock/schedule'; // モックデータのインポート

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const { currentMonth, currentYear, setMockSchedules } = useDayStore();

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
      <Button
        outerStyles={styles.addButton}
        setModalVisible={setModalVisible}
        label='予定を追加'
      />

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
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
