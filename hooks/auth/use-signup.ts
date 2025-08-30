import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

import { useUserStore } from '@/hooks/use-store';

export const useSignup = (formData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  const router = useRouter();
  const { setUser } = useUserStore();

  const handleSignup = () => {
    try {
      // TODO: サインアップ処理を実装
      setUser({
        uid: '123',
        email: formData.email,
        displayName: formData.firstName,
        createdAt: new Date(),
      });
      router.back();
      Toast.show({
        type: 'success',
        text1: 'サインアップに成功しました！',
      });
    } catch (error) {
      router.back();
      Toast.show({
        type: 'error',
        text1: 'サインアップに失敗しました。',
        text2: (error as Error).message,
      });
    }
  };

  return { handleSignup };
};
