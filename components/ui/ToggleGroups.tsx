import { Ionicons } from '@expo/vector-icons';
import { useCallback, memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useDayStore } from '@/hooks/use-store';

const ToggleGroups = memo(function ToggleGroups() {
  const { viewMode, setViewMode } = useDayStore();

  const handleViewMode = useCallback(() => {
    setViewMode(viewMode === 'calendar' ? 'list' : 'calendar');
  }, [viewMode, setViewMode]);

  return (
    <TouchableOpacity onPress={handleViewMode} style={styles.toggleGroup}>
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
});

export default ToggleGroups;

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
