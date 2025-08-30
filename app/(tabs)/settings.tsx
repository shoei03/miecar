import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  // TODO: 認証状態をグローバルステートから取得
  const [auth] = useState<boolean>(false);

  const text = {
    login: 'ログイン',
    logout: 'ログアウト',
    signup: '新規アカウントを作成',
    changePassword: 'パスワードを変更',
    changeEmail: 'メールアドレスを変更',
    deleteAccount: 'アカウントを削除',
  };

  return (
    <View>
      {auth ? (
        <>
          <TouchableOpacity>
            <Text>{text.logout}</Text>
          </TouchableOpacity>
          <Link href={`/(auth)/change-password`}>{text.changePassword}</Link>
          <Link href={`/(auth)/change-email`}>{text.changeEmail}</Link>
          <TouchableOpacity>
            <Text>{text.deleteAccount}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Link href={`/(auth)/login`}>{text.login}</Link>
          <Link href={`/(auth)/signup`}>{text.signup}</Link>
        </>
      )}
    </View>
  );
}
