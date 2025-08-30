import { Stack, useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function SupportLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name='contact'
        options={{
          title: 'お問い合わせ',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='feedback'
        options={{
          title: 'フィードバック',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name='help'
        options={{
          title: 'ヘルプ',
          headerShown: true,
          headerLeft: () => (
            <Button title='戻る' onPress={() => router.back()} />
          ),
        }}
      />
    </Stack>
  );
}
