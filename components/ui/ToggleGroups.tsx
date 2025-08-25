import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ToggleGroups({
  viewMode,
  setViewMode,
}: {
  viewMode: 'calendar' | 'list';
  setViewMode: (mode: 'calendar' | 'list') => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => setViewMode(viewMode === 'calendar' ? 'list' : 'calendar')}
      style={styles.toggleGroup}
    >
      <View
        style={[
          styles.toggleIconButton,
          viewMode === 'calendar' ? styles.toggleActive : styles.toggleInactive,
        ]}
      >
        <Ionicons
          name='calendar'
          size={20}
          color={viewMode === 'calendar' ? '#34C759' : '#8E8E93'}
        />
      </View>
      <View
        style={[
          styles.toggleIconButton,
          viewMode === 'list' ? styles.toggleActive : styles.toggleInactive,
        ]}
      >
        <Ionicons
          name='list'
          size={20}
          color={viewMode === 'list' ? '#34C759' : '#8E8E93'}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  toggleGroup: {
    flexDirection: 'row',
    gap: 0,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  toggleIconButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  toggleActive: {
    backgroundColor: '#eafbe7',
  },
  toggleInactive: {
    backgroundColor: '#fff',
  },
});
