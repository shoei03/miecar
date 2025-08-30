import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

import { useAuthStore } from '@/hooks/use-store';

export const useLogin = (formData: { email: string; password: string }) => {
  const router = useRouter();
  const { setIsAuthenticated } = useAuthStore();

  const handleLogin = () => {
    try {
      // TODO: ログイン処理をここに実装
      console.log(formData);
      setIsAuthenticated(true);
      router.back();
      Toast.show({
        type: 'success',
        text1: 'ログインに成功しました。',
      });
    } catch (error) {
      router.back();
      Toast.show({
        type: 'error',
        text1: 'ログインに失敗しました。',
        text2: (error as Error).message,
      });
    }
  };

  return { handleLogin };
};
