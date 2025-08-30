import { Stack, useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function TabLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name='change-email'
        options={{
          title: 'メールアドレス変更',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='change-password'
        options={{
          title: 'パスワード変更',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='login'
        options={{
          title: 'ログイン',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='privacy-settings'
        options={{
          title: 'プライバシー設定',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='signup'
        options={{
          title: '新規アカウント作成',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
    </Stack>
  );
}
