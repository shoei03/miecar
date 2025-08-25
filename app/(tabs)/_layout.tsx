import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#F8F8F8',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
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
