import { Link } from 'expo-router';
import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Colors } from '@/constants/Colors';
import { useSignup } from '@/hooks/auth/use-signup';

export default function SignupScreen() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };
  const { handleSignup } = useSignup(formData);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.form}>
          <View style={styles.nameRow}>
            <View style={styles.nameField}>
              <Text style={styles.label}>姓</Text>
              <TextInput
                style={styles.input}
                placeholder='田中'
                value={formData.firstName}
                onChangeText={value => updateField('firstName', value)}
                autoCapitalize='words'
              />
            </View>
            <View style={styles.nameField}>
              <Text style={styles.label}>名</Text>
              <TextInput
                style={styles.input}
                placeholder='太郎'
                value={formData.lastName}
                onChangeText={value => updateField('lastName', value)}
                autoCapitalize='words'
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>メールアドレス</Text>
            <TextInput
              style={styles.input}
              placeholder='example@email.com'
              value={formData.email}
              onChangeText={value => updateField('email', value)}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>パスワード</Text>
            <TextInput
              style={styles.input}
              placeholder='8文字以上で入力してください'
              value={formData.password}
              onChangeText={value => updateField('password', value)}
              secureTextEntry
              autoCapitalize='none'
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>パスワード確認</Text>
            <TextInput
              style={styles.input}
              placeholder='パスワードを再入力してください'
              value={formData.confirmPassword}
              onChangeText={value => updateField('confirmPassword', value)}
              secureTextEntry
              autoCapitalize='none'
            />
          </View>

          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>アカウントを作成</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>または</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>🍎 Appleでサインアップ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>📧 Googleでサインアップ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            すでにアカウントをお持ちですか？
          </Text>
          <Link href='/auth/login'>
            <Text style={styles.loginLink}>ログイン</Text>
          </Link>
        </View>

        <Text style={styles.termsText}>
          アカウントを作成することで、
          <Link href='/about/terms-of-service'>
            <Text style={styles.termsLink}>利用規約</Text>
          </Link>
          および
          <Link href='/about/privacy-policy'>
            <Text style={styles.termsLink}>プライバシーポリシー</Text>
          </Link>
          に同意したことになります。
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.subBackground,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 60,
  },
  form: {
    marginBottom: 32,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  nameField: {
    flex: 1,
    marginHorizontal: 4,
  },
  inputGroup: {
    marginBottom: 16,
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
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.light.text,
    shadowColor: Colors.light.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  signupButton: {
    backgroundColor: Colors.light.tint,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: Colors.light.tint,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  signupButtonText: {
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.light.border,
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: Colors.light.subText,
  },
  socialButton: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  socialButtonText: {
    fontSize: 16,
    color: Colors.light.text,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    color: Colors.light.subText,
    marginRight: 4,
  },
  loginLink: {
    fontSize: 14,
    color: Colors.light.tint,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 12,
    color: Colors.light.subText,
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: Colors.light.tint,
    fontWeight: '500',
  },
});
