import { router } from 'expo-router';
import { useState } from 'react';
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
  const { setModalVisible } = useDayStore();

  const handleBack = () => {
    router.back();
    // TODO: 先に閉じる
    setModalVisible(false);
  };

  const validateForm = () => {
    const requiredFields = [
      'purpose',
      'startTime',
      'endTime',
      'day',
      'month',
      'year',
      'userName',
    ];
    const missingFields = requiredFields.filter(
      field => !formData[field].trim()
    );

    if (missingFields.length > 0) {
      Alert.alert('入力エラー', 'すべての必須項目を入力してください。');
      return false;
    }

    // 日付の妥当性チェック
    const day = parseInt(formData.day);
    const month = parseInt(formData.month);
    const year = parseInt(formData.year);

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 2024) {
      Alert.alert('入力エラー', '正しい日付を入力してください。');
      return false;
    }

    return true;
  };

  const handleSave = () => {
    if (validateForm()) {
      Alert.alert('保存完了', '予定が正常に保存されました。', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    }
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.cancelButton}>キャンセル</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>予定を追加</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>保存</Text>
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
  required: {
    color: '#FF3B30',
    fontSize: 14,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  previewContainer: {
    marginBottom: 40,
  },
  preview: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  colorPreview: {
    width: 20,
    height: 60,
    borderRadius: 4,
    marginRight: 16,
  },
  previewContent: {
    flex: 1,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  previewSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 2,
  },
});
