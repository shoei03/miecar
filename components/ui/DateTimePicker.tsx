import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Colors } from '@/constants/Colors';
import { purposeOptions } from '@/constants/Options';
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
    startDate: false,
    startTime: false,
    endDate: false,
    endTime: false,
  });

  const showPicker = (
    type: 'startDate' | 'startTime' | 'endDate' | 'endTime'
  ) => {
    setPickerVisibility(prev => ({ ...prev, [type]: true }));
  };

  const hidePicker = (
    type: 'startDate' | 'startTime' | 'endDate' | 'endTime'
  ) => {
    setPickerVisibility(prev => ({ ...prev, [type]: false }));
  };

  const handlePickerConfirm = (
    type: 'startDate' | 'startTime' | 'endDate' | 'endTime',
    date: Date
  ) => {
    if (type === 'startDate') {
      setFormData(prev => ({
        ...prev,
        startDate: date.getDate(),
        startMonth: date.getMonth() + 1,
        startYear: date.getFullYear(),
      }));
    } else if (type === 'startTime') {
      setFormData(prev => ({
        ...prev,
        startTime: date,
      }));
    } else if (type === 'endDate') {
      setFormData(prev => ({
        ...prev,
        endDate: date.getDate(),
        endMonth: date.getMonth() + 1,
        endYear: date.getFullYear(),
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

  const [isFocus, setIsFocus] = useState(false);
  const familyMembers = [
    { label: 'User 1', value: '1' },
    { label: 'User 2', value: '2' },
    { label: 'User 3', value: '3' },
  ];

  return (
    <>
      {/* 使用者名 */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          使用者 <Text style={styles.required}>*</Text>
        </Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={familyMembers}
          search
          maxHeight={300}
          labelField='label'
          valueField='value'
          placeholder={!isFocus ? '使用者を選択' : '...'}
          searchPlaceholder='名前で検索...'
          value={formData.userName}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            handleInputChange('userName', item.value);
            setIsFocus(false);
          }}
        />
      </View>

      {/* 使用目的 */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          使用目的 <Text style={styles.required}>*</Text>
        </Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={purposeOptions}
          search
          maxHeight={300}
          labelField='label'
          valueField='value'
          placeholder={!isFocus ? '目的を選択' : '...'}
          searchPlaceholder='目的で検索...'
          value={formData.purpose}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            handleInputChange('purpose', item.value);
            setIsFocus(false);
          }}
        />
      </View>

      {/* 開始日時 */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          開始日時 <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateTimeItem}>
            <Text style={styles.dateTimeLabel}>日付</Text>
            <TextInput
              style={styles.textInput}
              value={`${formData.startYear}/${formData.startMonth}/${formData.startDate}`}
              onPress={() => showPicker('startDate')}
              onBlur={() =>
                validate(['date'], { date: formData.startYear.toString() })
              }
            />
          </View>
          <View style={styles.dateTimeItem}>
            <Text style={styles.dateTimeLabel}>時間</Text>
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
          </View>
        </View>
        <Text style={styles.errorText}>{errors.startTime || errors.date}</Text>
      </View>

      {/* 終了日時 */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          終了日時 <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateTimeItem}>
            <Text style={styles.dateTimeLabel}>日付</Text>
            <TextInput
              style={styles.textInput}
              value={`${formData.startYear}/${formData.startMonth}/${formData.endDate}`}
              onPress={() => showPicker('endDate')}
              onBlur={() =>
                validate(['date'], { date: formData.startYear.toString() })
              }
            />
          </View>
          <View style={styles.dateTimeItem}>
            <Text style={styles.dateTimeLabel}>時間</Text>
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
          </View>
        </View>
        <Text style={styles.errorText}>{errors.endTime}</Text>
      </View>

      {/* DateTimePicker Modals */}
      <DateTimePickerModal
        isVisible={pickerVisibility.startDate}
        mode='date'
        onConfirm={date => handlePickerConfirm('startDate', date)}
        onCancel={() => hidePicker('startDate')}
        confirmTextIOS='完了'
        cancelTextIOS='キャンセル'
      />
      <DateTimePickerModal
        isVisible={pickerVisibility.startTime}
        mode='time'
        onConfirm={date => handlePickerConfirm('startTime', date)}
        onCancel={() => hidePicker('startTime')}
        confirmTextIOS='完了'
        cancelTextIOS='キャンセル'
      />
      <DateTimePickerModal
        isVisible={pickerVisibility.endDate}
        mode='date'
        onConfirm={date => handlePickerConfirm('endDate', date)}
        onCancel={() => hidePicker('endDate')}
        confirmTextIOS='完了'
        cancelTextIOS='キャンセル'
      />
      <DateTimePickerModal
        isVisible={pickerVisibility.endTime}
        mode='time'
        onConfirm={date => handlePickerConfirm('endTime', date)}
        onCancel={() => hidePicker('endTime')}
        confirmTextIOS='完了'
        cancelTextIOS='キャンセル'
      />
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
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dateTimeItem: {
    flex: 1,
  },
  dateTimeLabel: {
    fontSize: 12,
    color: Colors.light.subText,
    marginBottom: 4,
    textAlign: 'center',
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
  container: {
    backgroundColor: Colors.light.background,
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: Colors.light.border,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: Colors.light.background,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
