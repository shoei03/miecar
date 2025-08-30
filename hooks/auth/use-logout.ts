import { useAuthStore } from '@/hooks/use-store';

export const useLogout = () => {
  const { setIsAuthenticated } = useAuthStore();

  const handleLogout: () => void = () => {
    // TODO: バックエンドにログアウトを知らせる
    setIsAuthenticated(false);
  };

  return { handleLogout };
};
