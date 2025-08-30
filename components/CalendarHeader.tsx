import { Ionicons } from '@expo/vector-icons';
import { memo, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ToggleGroups from '@/components/ui/ToggleGroups';
import { Colors } from '@/constants/Colors';
import { useDayStore } from '@/hooks/use-store';

const CalendarHeader = memo(function CalendarHeader() {
  const { currentYear, currentMonth, setCurrentYear, setCurrentMonth } =
    useDayStore();

  const handleChangeMonth = useCallback(
    (direction: -1 | 1) => {
      const newDate = new Date(currentYear, currentMonth + direction, 1);
      setCurrentYear(newDate.getFullYear());
      setCurrentMonth(newDate.getMonth());
    },
    [currentMonth, currentYear, setCurrentMonth, setCurrentYear]
  );

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <ToggleGroups />
      </View>
      <TouchableOpacity onPress={() => handleChangeMonth(-1)}>
        <Ionicons
          name='arrow-back'
          size={20}
          color={Colors.light.tabIconDefault}
        />
      </TouchableOpacity>
      <View style={styles.headerCenter}>
        <Text style={styles.headerMonthText}>
          {currentYear}年{currentMonth}月
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleChangeMonth(1)}>
        <Ionicons
          name='arrow-forward'
          size={20}
          color={Colors.light.tabIconDefault}
        />
      </TouchableOpacity>
      <View style={styles.headerRight}>
        {/* TODO:家族カレンダーの切り替えボタンを設置 */}
      </View>
    </View>
  );
});

export default CalendarHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    paddingTop: 16,
    backgroundColor: Colors.light.background,
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
    color: Colors.light.text,
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-end',
  },
});
