import { useUserStore } from '@/hooks/use-store';

export const useDeleteAccount = () => {
  const { setUser } = useUserStore();

  const handleDeleteAccount: () => void = () => {
    // TODO: バックエンドにアカウント削除を知らせる
    setUser(null);
  };

  return { handleDeleteAccount };
};
