import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Colors } from '@/constants/Colors';
import { useValidation } from '@/hooks/use-validation';
import type { formDataType } from '@/types/form';

export default function DateTimePicker({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}) {
  const [pickerVisibility, setPickerVisibility] = useState({
    date: false,
    startTime: false,
    endTime: false,
  });

  const showPicker = (type: 'date' | 'startTime' | 'endTime') => {
    setPickerVisibility(prev => ({ ...prev, [type]: true }));
  };

  const hidePicker = (type: 'date' | 'startTime' | 'endTime') => {
    setPickerVisibility(prev => ({ ...prev, [type]: false }));
  };

  const handlePickerConfirm = (
    type: 'date' | 'startTime' | 'endTime',
    date: Date
  ) => {
    if (type === 'date') {
      setFormData(prev => ({
        ...prev,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      }));
    } else if (type === 'startTime') {
      setFormData(prev => ({
        ...prev,
        startTime: date,
      }));
    } else if (type === 'endTime') {
      setFormData(prev => ({
        ...prev,
        endTime: date,
      }));
    }
    hidePicker(type);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const { errors, validate } = useValidation();

  return (
    <>
      {/* 使用目的 */}
      {/* TODO: 選択形式にする */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          使用目的 <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={[styles.textInput, styles.multilineInput]}
          placeholder='例: 買い物、通勤、送迎など'
          value={formData.purpose}
          onChangeText={value => handleInputChange('purpose', value)}
          multiline
          numberOfLines={3}
        />
      </View>

      {/* 開始時刻入力 */}
      <DateTimePickerModal
        isVisible={pickerVisibility.startTime}
        mode='time'
        onConfirm={date => handlePickerConfirm('startTime', date)}
        onCancel={() => hidePicker('startTime')}
        confirmTextIOS='完了'
        cancelTextIOS='キャンセル'
      />
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          開始時刻 <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.textInput}
          value={formData.startTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
          onPress={() => showPicker('startTime')}
          onBlur={() =>
            validate(['startTime'], {
              startTime: formData.startTime.toString(),
            })
          }
        />
        <Text style={styles.errorText}>{errors.startTime}</Text>
      </View>

      {/* 終了時刻入力 */}
      <DateTimePickerModal
        isVisible={pickerVisibility.endTime}
        mode='time'
        onConfirm={date => handlePickerConfirm('endTime', date)}
        onCancel={() => hidePicker('endTime')}
        confirmTextIOS='完了'
        cancelTextIOS='キャンセル'
      />
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          終了時刻 <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.textInput}
          value={formData.endTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
          onPress={() => showPicker('endTime')}
          onBlur={() =>
            validate(['endTime'], {
              startTime: formData.startTime.toString(),
              endTime: formData.endTime.toString(),
            })
          }
        />
        <Text style={styles.errorText}>{errors.endTime}</Text>
      </View>

      {/* 日付入力 */}
      <DateTimePickerModal
        isVisible={pickerVisibility.date}
        mode='date'
        onConfirm={date => handlePickerConfirm('date', date)}
        onCancel={() => hidePicker('date')}
        confirmTextIOS='完了'
        cancelTextIOS='キャンセル'
      />
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          日付 <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.dateContainer}>
          <View style={styles.dateInputWrapper}>
            <Text style={styles.dateLabel}>年</Text>
            <TextInput
              style={styles.dateInput}
              value={formData.year.toString()}
              onPress={() => showPicker('date')}
              onBlur={() =>
                validate(['date'], { date: formData.year.toString() })
              }
            />
          </View>
          <View style={styles.dateInputWrapper}>
            <Text style={styles.dateLabel}>月</Text>
            <TextInput
              style={styles.dateInput}
              value={formData.month.toString()}
              onPress={() => showPicker('date')}
              onBlur={() =>
                validate(['date'], { date: formData.month.toString() })
              }
            />
          </View>
          <View style={styles.dateInputWrapper}>
            <Text style={styles.dateLabel}>日</Text>
            <TextInput
              style={styles.dateInput}
              value={formData.day.toString()}
              onPress={() => showPicker('date')}
              onBlur={() =>
                validate(['date'], { date: formData.day.toString() })
              }
            />
          </View>
        </View>
        <Text style={styles.errorText}>{errors.date}</Text>
      </View>

      {/* 使用者名 */}
      {/* TODO: 選択形式にする */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          使用者 <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='使用者名を入力'
          value={formData.userName}
          onChangeText={value => handleInputChange('userName', value)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 24,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.subText,
    marginBottom: 8,
  },
  required: {
    color: Colors.light.error,
    fontSize: 14,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.light.border,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
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
    color: Colors.light.subText,
    marginBottom: 4,
    textAlign: 'center',
  },
  dateInput: {
    backgroundColor: Colors.light.background,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.light.border,
    textAlign: 'center',
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  errorText: {
    color: Colors.light.error,
    fontSize: 12,
    marginTop: 4,
  },
});
