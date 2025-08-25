import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({
  setModalVisible,
  label,
}: {
  setModalVisible: (visible: boolean) => void;
  iconName?: string;
  label?: string;
}) {
  return (
    <TouchableOpacity
      style={styles.addScheduleButton}
      onPress={() => setModalVisible(true)}
    >
      <Ionicons name='add' size={20} color='#34C759' />
      <Text style={styles.addScheduleText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addScheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  addScheduleText: {
    fontSize: 16,
    color: '#34C759',
    marginLeft: 8,
    fontWeight: '500',
  },
});
