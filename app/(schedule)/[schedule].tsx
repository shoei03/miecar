import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ColorPicker from '@/components/ui/ColorPicker';
import DateTimePicker from '@/components/ui/DateTimePicker';
import { useDayStore } from '@/hooks/use-store';
import type { formDataType } from '@/types/form';

export default function AddScheduleScreen() {
  const { currentDate, currentMonth, currentYear } = useDayStore();
  const [formData, setFormData] = useState<formDataType>({
    purpose: '',
    startTime: new Date(),
    endTime: new Date(),
    day: currentDate,
    month: currentMonth,
    year: currentYear,
    userName: '',
    color: '#007AFF',
  });

  const { schedule } = useLocalSearchParams();

  const text = {
    HeaderBackButton: '戻る',
    headerTitle: schedule === 'edit' ? '予定を編集' : '予定を追加',
    headerSaveButton: schedule === 'edit' ? '更新' : '保存',
    saveAlertTitle: schedule === 'edit' ? '更新完了' : '保存完了',
    saveAlertMessage:
      schedule === 'edit'
        ? '予定が正常に更新されました。'
        : '予定を正常に保存しました。',
    saveErrorMessage:
      schedule === 'edit'
        ? '予定の更新に失敗しました。'
        : '予定の保存に失敗しました。',
  };

  const handleBack = useCallback(() => {
    // TODO: 変更がある場合は確認ダイアログを表示
    router.back();
  }, []);

  const handleSave = () => {
    // TODO: データベースへの保存処理を実装
    // TODO: グローバルステートの更新処理を実装
    // 成功時
    // Alert.alert(text.saveAlertTitle, text.saveAlertMessage, [
    //   { text: 'OK', onPress: () => router.back() },
    // ]);
    // 失敗時
    Alert.alert(text.saveAlertTitle, text.saveErrorMessage, [
      { text: 'OK', onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.cancelButton}>{text.HeaderBackButton}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{text.headerTitle}</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>{text.headerSaveButton}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ColorPicker formData={formData} setFormData={setFormData} />
        <DateTimePicker formData={formData} setFormData={setFormData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cancelButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  saveButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
