import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

import { useUserStore } from '@/hooks/use-store';

export const useChangeEmail = (formData: {
  currentEmail: string;
  newEmail: string;
  password: string;
}) => {
  const router = useRouter();
  const { user, setUser } = useUserStore();

  const handleChangeEmail: () => void = () => {
    try {
      // TODO: 新しいメールアドレスに確認メールを送信
      // TODO: メールアドレスが変更されたことを確認する処理を実装
      setUser({
        uid: user?.uid ?? '',
        email: formData.newEmail,
        displayName: user?.displayName ?? '',
        createdAt: user?.createdAt ?? new Date(),
      });
      router.back();
      Toast.show({
        type: 'success',
        text1: '確認メールを送信しました。',
        text2: '新しいメールアドレスをご確認ください。',
      });
    } catch (error) {
      router.back();
      Toast.show({
        type: 'error',
        text1: 'メールアドレス変更に失敗しました。',
        text2: (error as Error).message,
      });
    }
  };

  return { handleChangeEmail };
};
