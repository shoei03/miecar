import { useRouter } from 'expo-router';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const useChangePassword = () => {
  const router = useRouter();

  const handleChangePassword = () => {
    try {
      // TODO: 古いパスワードと新しいパスワードが異なることを確認
      // TODO: 新しいパスワードが確認用パスワードと一致することを確認
      // TODO: 古いパスワードと新しいパスワードをDBに送信して更新処理を実装
      router.back();
      Toast.show({
        type: 'success',
        text1: 'パスワードを変更しました。',
      });
    } catch (error) {
      router.back();
      Toast.show({
        type: 'error',
        text1: 'パスワード変更に失敗しました。',
        text2: (error as Error).message,
      });
    }
  };

  return {
    handleChangePassword,
  };
};
