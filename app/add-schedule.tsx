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
} from 'react-native';

export default function AddScheduleScreen() {
  const [purpose, setPurpose] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    <SafeAreaView style={addScheduleStyles.container}>
      <View style={addScheduleStyles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={addScheduleStyles.cancelButton}>キャンセル</Text>
        </TouchableOpacity>
        <Text style={addScheduleStyles.headerTitle}>予定を追加</Text>
        <TouchableOpacity>
          <Text style={addScheduleStyles.saveButton}>保存</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={addScheduleStyles.content}>
        <View style={addScheduleStyles.formGroup}>
          <Text style={addScheduleStyles.label}>使用目的</Text>
          <TextInput
            style={addScheduleStyles.textInput}
            placeholder='例: 買い物、通勤など'
            value={purpose}
            onChangeText={setPurpose}
          />
        </View>

        <View style={addScheduleStyles.formGroup}>
          <Text style={addScheduleStyles.label}>開始時刻</Text>
          <TouchableOpacity
            style={addScheduleStyles.timeInput}
            onPress={() => setStartTime('09:00')}
          >
            <Text style={addScheduleStyles.timeText}>
              {startTime || '時刻を選択'}
            </Text>
            <Ionicons name='time' size={20} color='#8E8E93' />
          </TouchableOpacity>
        </View>

        <View style={addScheduleStyles.formGroup}>
          <Text style={addScheduleStyles.label}>終了時刻</Text>
          <TouchableOpacity
            style={addScheduleStyles.timeInput}
            onPress={() => setEndTime('18:00')}
          >
            <Text style={addScheduleStyles.timeText}>
              {endTime || '時刻を選択'}
            </Text>
            <Ionicons name='time' size={20} color='#8E8E93' />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 予定追加画面のスタイル
const addScheduleStyles = StyleSheet.create({
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
  textInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  timeInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  timeText: {
    fontSize: 16,
    color: '#1C1C1E',
  },
});
