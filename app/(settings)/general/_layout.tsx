import { Stack, useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function GeneralLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name='language-settings'
        options={{
          title: '言語設定',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='notification-settings'
        options={{
          title: '通知設定',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='theme-settings'
        options={{
          title: 'テーマ設定',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
    </Stack>
  );
}
