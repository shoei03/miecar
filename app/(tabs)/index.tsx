import React, { useState } from 'react';
import { Modal, SafeAreaView, StyleSheet } from 'react-native';

import CalendarHeader from '@/components/CalendarHeader';
import CalendarView from '@/components/CalendarView';
import Button from '@/components/ui/Button';
import ModalContents from '@/components/ui/ModalContents';
import { mockSchedules } from '@/mock/schedule';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* ヘッダー */}
      <CalendarHeader />

      {/* カレンダーのコンテンツ */}
      <CalendarView mockSchedules={mockSchedules} />

      {/* 予定を追加するボタン */}
      <Button setModalVisible={setModalVisible} label='予定を追加' />

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
});
