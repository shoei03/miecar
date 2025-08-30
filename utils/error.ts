/**
 * 日本語のエラーメッセージを取得する
 * @param error - Firebaseのエラーコード
 * @returns 日本語のエラーメッセージ
 */
const getJapaneseErrorMessage = (error: string): string => {
  const errorMessages: { [key: string]: string } = {
    'auth/email-already-in-use': 'このメールアドレスは既に使用されています',
    'auth/weak-password':
      'パスワードが弱すぎます（6文字以上で入力してください）',
    'auth/invalid-email': '無効なメールアドレスです',
    'auth/user-not-found': 'ユーザーが見つかりません',
    'auth/wrong-password': 'パスワードが間違っています',
    'auth/too-many-requests':
      'リクエストが多すぎます。しばらく時間をおいてから再試行してください',
    'auth/network-request-failed': 'ネットワークエラーが発生しました',
    'auth/operation-not-allowed': 'この操作は許可されていません',
  };

  return errorMessages[error] || 'エラーが発生しました';
};

/**
 * エラーハンドリングのヘルパー関数
 * @param error - 発生したエラー
 */
export const handleAuthError = (error: unknown): never => {
  // エラーコードを取得
  const errorCode =
    error && typeof error === 'object' && 'code' in error
      ? (error as { code: string }).code
      : undefined;
  // エラーメッセージを取得
  const errorMessage =
    error && typeof error === 'object' && 'message' in error
      ? (error as { message: string }).message
      : '不明なエラーが発生しました';

  const japaneseMessage = errorCode ? getJapaneseErrorMessage(errorCode) : null;
  throw new Error(japaneseMessage || errorMessage);
};
