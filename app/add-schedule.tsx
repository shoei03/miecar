import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import { useDayStore } from '@/hooks/use-store';

const colorOptions = [
  '#007AFF',
  '#FF3B30',
  '#FF9500',
  '#FFCC00',
  '#34C759',
  '#5856D6',
  '#AF52DE',
  '#FF2D92',
  '#5AC8FA',
  '#32D74B',
  '#FF6B35',
  '#8E8E93',
];

export default function AddScheduleScreen() {
  const { currentDate, currentMonth, currentYear, setModalVisible } =
    useDayStore();

  const [formData, setFormData] = useState({
    purpose: '',
    startTime: '',
    endTime: '',
    day: currentDate.toString(),
    month: currentMonth.toString(),
    year: currentYear.toString(),
    userName: '',
    color: '#007AFF',
  });

  const handleBack = () => {
    router.back();
    setModalVisible(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
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

  const renderColorPicker = () => (
    <View style={styles.colorContainer}>
      {colorOptions.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.colorOption,
            { backgroundColor: color },
            formData.color === color && styles.selectedColor,
          ]}
          onPress={() => handleInputChange('color', color)}
        >
          {formData.color === color && (
            <Ionicons name='checkmark' size={16} color='white' />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );

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
        {/* カラーピッカー */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>カテゴリーカラー</Text>
          {renderColorPicker()}
        </View>

        {/* 使用目的 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            使用目的 <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.textInput, styles.multilineInput]}
            placeholder='例: 買い物、通勤、会議など'
            value={formData.purpose}
            onChangeText={value => handleInputChange('purpose', value)}
            multiline
            numberOfLines={3}
          />
        </View>

        {/* 時刻入力 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            開始時刻 <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder='09:00'
            value={formData.startTime}
            onChangeText={value => handleInputChange('startTime', value)}
            keyboardType='numeric'
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>
            終了時刻 <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder='18:00'
            value={formData.endTime}
            onChangeText={value => handleInputChange('endTime', value)}
            keyboardType='numeric'
          />
        </View>

        {/* 日付入力 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            日付 <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.dateContainer}>
            <View style={styles.dateInputWrapper}>
              <Text style={styles.dateLabel}>年</Text>
              <TextInput
                style={styles.dateInput}
                placeholder='2024'
                value={formData.year}
                onChangeText={value => handleInputChange('year', value)}
                keyboardType='numeric'
                maxLength={4}
              />
            </View>
            <View style={styles.dateInputWrapper}>
              <Text style={styles.dateLabel}>月</Text>
              <TextInput
                style={styles.dateInput}
                placeholder='12'
                value={formData.month}
                onChangeText={value => handleInputChange('month', value)}
                keyboardType='numeric'
                maxLength={2}
              />
            </View>
            <View style={styles.dateInputWrapper}>
              <Text style={styles.dateLabel}>日</Text>
              <TextInput
                style={styles.dateInput}
                placeholder='25'
                value={formData.day}
                onChangeText={value => handleInputChange('day', value)}
                keyboardType='numeric'
                maxLength={2}
              />
            </View>
          </View>
        </View>

        {/* ユーザー名 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            ユーザー名 <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder='ユーザー名を入力'
            value={formData.userName}
            onChangeText={value => handleInputChange('userName', value)}
          />
        </View>
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
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 8,
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
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dateInputWrapper: {
    flex: 1,
  },
  dateLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
    textAlign: 'center',
  },
  dateInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingVertical: 8,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedColor: {
    borderWidth: 3,
    borderColor: '#1C1C1E',
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
