import { useRouter } from 'expo-router';
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
import { useUserStore } from '@/hooks/use-store';

export default function ChangeEmailScreen() {
  const router = useRouter();
  const { user } = useUserStore();
  const [formData, setFormData] = useState({
    currentEmail: user?.email || '',
    newEmail: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = () => {
    try {
      // TODO: 新しいメールアドレスに確認メールを送信
      // TODO: メールアドレスが変更されたことを確認する処理を実装
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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          {/* フォーム */}
          <View style={styles.form}>
            {/* 現在のメールアドレス表示 */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>現在のメールアドレス</Text>
              <View style={styles.currentEmailContainer}>
                <Text style={styles.currentEmailText}>
                  {formData.currentEmail}
                </Text>
              </View>
            </View>

            {/* 新しいメールアドレス入力 */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>新しいメールアドレス</Text>
              <TextInput
                style={styles.input}
                value={formData.newEmail}
                onChangeText={newEmail =>
                  setFormData({ ...formData, newEmail })
                }
                placeholder='new@example.com'
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
                  placeholder='現在のパスワードを入力'
                  placeholderTextColor='#9CA3AF'
                  secureTextEntry={!showPassword}
                  autoComplete='current-password'
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

            {/* 注意事項 */}
            <View style={styles.noticeContainer}>
              <Text style={styles.noticeTitle}>ご注意</Text>
              <Text style={styles.noticeItem}>
                • 新しいメールアドレスに確認メールが送信されます
              </Text>
              <Text style={styles.noticeItem}>
                • メール内のリンクをクリックして変更を完了してください
              </Text>
              <Text style={styles.noticeItem}>
                • 確認が完了するまで現在のメールアドレスが有効です
              </Text>
            </View>

            {/* 変更ボタン */}
            <TouchableOpacity
              style={styles.changeButton}
              onPress={handleChangeEmail}
            >
              <Text style={styles.changeButtonText}>メールアドレスを変更</Text>
            </TouchableOpacity>

            {/* キャンセルボタン */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => router.back()}
            >
              <Text style={styles.cancelButtonText}>キャンセル</Text>
            </TouchableOpacity>
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
    paddingTop: 40,
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
  currentEmailContainer: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  currentEmailText: {
    fontSize: 16,
    color: Colors.light.subText,
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
  noticeContainer: {
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  noticeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 8,
  },
  noticeItem: {
    fontSize: 14,
    color: Colors.light.subText,
    lineHeight: 20,
  },
  changeButton: {
    backgroundColor: Colors.light.tint,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  changeButtonText: {
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: '500',
  },
  // 確認メール送信後の画面スタイル
  verificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconContainer: {
    marginBottom: 24,
  },
  iconText: {
    fontSize: 64,
  },
  verificationTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.light.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  verificationMessage: {
    fontSize: 16,
    color: Colors.light.subText,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  resendButton: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.tint,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 12,
  },
  resendButtonText: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  backButtonText: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: '500',
  },
});
