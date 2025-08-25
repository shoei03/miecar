import { StyleSheet, Text, View } from 'react-native';

import ToggleGroups from '@/components/ui/ToggleGroups';

export default function CalendarHeader({
  currentDate,
  viewMode,
  setViewMode,
}: {
  currentDate: Date;
  viewMode: 'calendar' | 'list';
  setViewMode: (mode: 'calendar' | 'list') => void;
}) {
  const formatMonthYear = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <ToggleGroups viewMode={viewMode} setViewMode={setViewMode} />
      </View>
      <View style={styles.headerCenter}>
        <Text style={styles.headerMonthText}>
          {formatMonthYear(currentDate)}
        </Text>
      </View>
      <View style={styles.headerRight}>
        {/* TODO:家族カレンダーの切り替えボタンを設置 */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    paddingTop: 16,
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-start',
  },
  headerCenter: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerMonthText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-end',
  },
});
