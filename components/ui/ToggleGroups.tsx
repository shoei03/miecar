import { Ionicons } from '@expo/vector-icons';
import { useCallback, memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Colors } from '@/constants/Colors';
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
          color={
            viewMode === 'calendar'
              ? Colors.light.background
              : Colors.light.tint
          }
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
          color={
            viewMode === 'list' ? Colors.light.background : Colors.light.tint
          }
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
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.tint,
  },
  toggleIconButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  toggleActive: {
    backgroundColor: Colors.light.tint,
  },
  toggleInactive: {
    backgroundColor: Colors.light.background,
  },
});
