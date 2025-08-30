import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import type { formDataType } from '@/types/form';

const colorOptions = [
  Colors.light.tint,
  Colors.light.success,
  Colors.light.error,
  Colors.light.warning,
];

export default function ColorPicker({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}) {
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderColorPicker = () => (
    <View style={styles.colorContainer}>
      {colorOptions.map(color => (
        <TouchableOpacity
          key={color} // Use color as a unique key instead of index
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
    <View style={styles.formGroup}>
      <Text style={styles.label}>カテゴリーカラー</Text>
      {renderColorPicker()}
    </View>
  );
}

const styles = StyleSheet.create({
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
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedColor: {
    borderWidth: 3,
    borderColor: Colors.light.text,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.subText,
    marginBottom: 8,
  },
});
