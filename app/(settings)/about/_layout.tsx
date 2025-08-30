import { Stack, useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function AboutLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name='licenses'
        options={{
          title: 'ライセンス情報',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='privacy-policy'
        options={{
          title: 'プライバシーポリシー',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='terms-of-service'
        options={{
          title: '利用規約',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='version-info'
        options={{
          title: 'バージョン情報',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
    </Stack>
  );
}
