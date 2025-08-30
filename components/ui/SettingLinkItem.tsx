import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

export const SettingLinkItem = ({
  icon,
  title,
  href,
  type = 'default',
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  href: string;
  type?: 'default' | 'destructive';
}) => (
  <Link href={href} asChild>
    <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
      <View style={styles.settingItemContent}>
        <Ionicons
          name={icon}
          size={24}
          color={
            type === 'destructive' ? Colors.light.error : Colors.light.tint
          }
          style={styles.icon}
        />
        <Text
          style={[
            styles.settingText,
            type === 'destructive' && styles.destructiveText,
          ]}
        >
          {title}
        </Text>
      </View>
      <Ionicons
        name='chevron-forward'
        size={20}
        color={Colors.light.tabIconDefault}
      />
    </TouchableOpacity>
  </Link>
);

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 50,
  },
  settingItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 12,
    width: 24,
  },
  settingText: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.light.text,
    flex: 1,
  },
  destructiveText: {
    color: Colors.light.error,
  },
});
