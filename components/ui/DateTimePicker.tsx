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
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder='Search...'
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
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder='Search...'
          value={formData.purpose}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            handleInputChange('purpose', item.value);
            setIsFocus(false);
          }}
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
