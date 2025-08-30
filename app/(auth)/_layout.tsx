import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='login'
        options={{
          headerShown: true,
          title: 'ログイン',
        }}
      />
      <Stack.Screen
        name='signup'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='change-password'
        options={{
          headerShown: true,
          title: 'パスワード変更',
          headerBackVisible: true,
          headerBackTitle: '戻る',
        }}
      />
      <Stack.Screen
        name='change-email'
        options={{
          headerShown: true,
          title: 'メールアドレス変更',
          headerBackVisible: true,
          headerBackTitle: '戻る',
        }}
      />
    </Stack>
  );
}
