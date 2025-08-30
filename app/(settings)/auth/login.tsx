import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { Colors } from '@/constants/Colors';
import { useAuthStore } from '@/hooks/use-store';

export default function LoginScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuthenticated } = useAuthStore();

  const handleLogin = () => {
    try {
      // TODO: ログイン処理をここに実装
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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          {/* フォーム */}
          <View style={styles.form}>
            {/* メールアドレス入力 */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>メールアドレス</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={email => setFormData({ ...formData, email })}
                placeholder='example@email.com'
                placeholderTextColor='#9CA3AF'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
              />
            </View>

            {/* パスワード入力 */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>パスワード</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={formData.password}
                  onChangeText={password =>
                    setFormData({ ...formData, password })
                  }
                  placeholder='パスワードを入力'
                  placeholderTextColor='#9CA3AF'
                  secureTextEntry={!showPassword}
                  autoComplete='password'
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.passwordToggleText}>
                    {showPassword ? '非表示' : '表示'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* パスワードを忘れた場合のリンク */}
            <Link
              style={styles.forgotPasswordContainer}
              href='/(settings)/auth/change-password'
            >
              <Text style={styles.forgotPasswordText}>
                パスワードを忘れましたか？
              </Text>
            </Link>

            {/* ログインボタン */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>ログイン</Text>
            </TouchableOpacity>

            {/* または区切り線 */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>または</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* ソーシャルログインボタン */}
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>🔵 Googleでログイン</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
              <Text style={styles.socialButtonText}>🍎 Appleでログイン</Text>
            </TouchableOpacity>
          </View>

          {/* サインアップリンク */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              アカウントをお持ちでないですか？
            </Text>
            <Link href='/(settings)/auth/signup'>
              <Text style={styles.signupLink}>新規登録</Text>
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.subBackground,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.subText,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.light.text,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.light.text,
  },
  passwordToggle: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  passwordToggleText: {
    color: Colors.light.tint,
    fontSize: 14,
    fontWeight: '600',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: Colors.light.tint,
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: Colors.light.tint,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.light.border,
  },
  dividerText: {
    marginHorizontal: 16,
    color: Colors.light.subText,
    fontSize: 14,
  },
  socialButton: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  appleButton: {
    backgroundColor: Colors.light.background,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: Colors.light.subText,
    fontSize: 14,
    marginRight: 4,
  },
  signupLink: {
    color: Colors.light.tint,
    fontSize: 14,
    fontWeight: '600',
  },
});
