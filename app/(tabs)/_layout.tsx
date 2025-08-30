import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          borderTopWidth: 1,
          borderTopColor: Colors.light.border,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'カレンダー',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='family'
        options={{
          title: '家族',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='people' size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: '設定',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
