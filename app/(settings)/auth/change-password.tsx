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

export default function ChangePasswordScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChangePassword = () => {
    try {
      // TODO: パスワード変更処理をここに実装
      // 成功時の処理
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

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
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
            {/* 現在のパスワード入力 */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>現在のパスワード</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={formData.currentPassword}
                  onChangeText={currentPassword =>
                    setFormData({ ...formData, currentPassword })
                  }
                  placeholder='現在のパスワードを入力'
                  placeholderTextColor='#9CA3AF'
                  secureTextEntry={!showPasswords.current}
                  autoComplete='current-password'
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => togglePasswordVisibility('current')}
                >
                  <Text style={styles.passwordToggleText}>
                    {showPasswords.current ? '非表示' : '表示'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* 新しいパスワード入力 */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>新しいパスワード</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={formData.newPassword}
                  onChangeText={newPassword =>
                    setFormData({ ...formData, newPassword })
                  }
                  placeholder='新しいパスワードを入力'
                  placeholderTextColor='#9CA3AF'
                  secureTextEntry={!showPasswords.new}
                  autoComplete='new-password'
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => togglePasswordVisibility('new')}
                >
                  <Text style={styles.passwordToggleText}>
                    {showPasswords.new ? '非表示' : '表示'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* パスワード確認入力 */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>新しいパスワード（確認）</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={formData.confirmPassword}
                  onChangeText={confirmPassword =>
                    setFormData({ ...formData, confirmPassword })
                  }
                  placeholder='新しいパスワードを再入力'
                  placeholderTextColor='#9CA3AF'
                  secureTextEntry={!showPasswords.confirm}
                  autoComplete='new-password'
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => togglePasswordVisibility('confirm')}
                >
                  <Text style={styles.passwordToggleText}>
                    {showPasswords.confirm ? '非表示' : '表示'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* パスワード要件の説明 */}
            <View style={styles.requirementsContainer}>
              <Text style={styles.requirementsTitle}>パスワードの要件</Text>
              <Text style={styles.requirementItem}>• 8文字以上</Text>
              <Text style={styles.requirementItem}>• 英数字を含む</Text>
              <Text style={styles.requirementItem}>• 記号を含むことを推奨</Text>
            </View>

            {/* 変更ボタン */}
            <TouchableOpacity
              style={styles.changeButton}
              onPress={handleChangePassword}
            >
              <Text style={styles.changeButtonText}>パスワードを変更</Text>
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
  requirementsContainer: {
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  requirementsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 8,
  },
  requirementItem: {
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
});
