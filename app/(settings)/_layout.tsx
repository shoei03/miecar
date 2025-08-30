import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='about'
        options={{
          title: 'このアプリについて',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='auth'
        options={{
          title: '認証',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='general'
        options={{
          title: '一般',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='support'
        options={{
          title: 'サポート',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
