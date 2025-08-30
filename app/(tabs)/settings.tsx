import { useState, version } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';

import { SettingItem } from '@/components/ui/SettingItem';
import { SettingLinkItem } from '@/components/ui/SettingLinkItem';
import { Colors } from '@/constants/Colors';

const text = {
  title: '設定',
  account: 'アカウント',
  login: 'ログイン',
  signup: '新規アカウントを作成',
  logout: 'ログアウト',
  security: 'セキュリティ',
  changePassword: 'パスワードを変更',
  changeEmail: 'メールアドレスを変更',
  privacy: 'プライバシー設定',
  deleteAccount: 'アカウントを削除',
  general: '一般',
  notifications: '通知',
  theme: 'テーマ',
  language: '言語',
  support: 'サポート',
  help: 'ヘルプ',
  contact: 'お問い合わせ',
  feedback: 'フィードバック',
  about: 'アプリについて',
  version: `バージョン ${version}`,
  termsOfService: '利用規約',
  privacyPolicy: 'プライバシーポリシー',
  licenses: 'ライセンス',
};

export default function SettingsScreen() {
  // TODO: 認証状態をグローバルステートから取得
  const [auth] = useState<boolean>(true);

  const handleLogout = () => {
    Alert.alert('ログアウト', 'ログアウトしますか？', [
      { text: 'キャンセル', style: 'cancel' },
      {
        text: 'ログアウト',
        style: 'destructive',
        onPress: () => {
          // TODO: ログアウト処理を実装
        },
      },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'アカウント削除',
      'この操作は取り消せません。本当にアカウントを削除しますか？',
      [
        { text: 'キャンセル', style: 'cancel' },
        {
          text: '削除',
          style: 'destructive',
          onPress: () => {
            // TODO: アカウント削除処理を実装
          },
        },
      ]
    );
  };

  const SectionHeader = ({ title }: { title: string }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {auth ? (
        <>
          <SectionHeader title={text.account} />
          <View style={styles.section}>
            <SettingItem
              icon='log-out-outline'
              title={text.logout}
              onPress={handleLogout}
            />
          </View>

          <SectionHeader title={text.security} />
          <View style={styles.section}>
            <SettingLinkItem
              icon='key-outline'
              title={text.changePassword}
              href='/auth/change-password'
            />
            <View style={styles.separator} />
            <SettingLinkItem
              icon='mail-outline'
              title={text.changeEmail}
              href='/auth/change-email'
            />
            <View style={styles.separator} />
            <SettingLinkItem
              icon='shield-checkmark-outline'
              title={text.privacy}
              href='/auth/privacy-settings'
            />
          </View>

          <View style={styles.section}>
            <SettingItem
              icon='trash-outline'
              title={text.deleteAccount}
              onPress={handleDeleteAccount}
              type='destructive'
            />
          </View>
        </>
      ) : (
        <>
          <SectionHeader title={text.account} />
          <View style={styles.section}>
            <SettingLinkItem
              icon='log-in-outline'
              title={text.login}
              href='/auth/login'
            />
            <View style={styles.separator} />
            <SettingLinkItem
              icon='person-add-outline'
              title={text.signup}
              href='/auth/signup'
            />
          </View>
        </>
      )}

      <SectionHeader title={text.general} />
      <View style={styles.section}>
        <SettingLinkItem
          icon='notifications-outline'
          title={text.notifications}
          href='(settings)/general/notification-settings'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='color-palette-outline'
          title={text.theme}
          href='(settings)/general/theme-settings'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='language-outline'
          title={text.language}
          href='(settings)/general/language-settings'
        />
      </View>

      <SectionHeader title={text.support} />
      <View style={styles.section}>
        <SettingLinkItem
          icon='help-circle-outline'
          title={text.help}
          href='(settings)/support/help'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='mail-outline'
          title={text.contact}
          href='(settings)/support/contact'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='chatbubble-outline'
          title={text.feedback}
          href='(settings)/support/feedback'
        />
      </View>

      <SectionHeader title={text.about} />
      <View style={styles.section}>
        <SettingLinkItem
          icon='information-circle-outline'
          title={text.version}
          href='(settings)/about/version-info'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='document-text-outline'
          title={text.termsOfService}
          href='(settings)/about/terms-of-service'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='lock-closed-outline'
          title={text.privacyPolicy}
          href='(settings)/about/privacy-policy'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='library-outline'
          title={text.licenses}
          href='(settings)/about/licenses'
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.subBackground,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.light.subText,
    textTransform: 'uppercase',
    marginTop: 30,
    marginBottom: 8,
    marginHorizontal: 20,
    letterSpacing: 0.5,
  },
  section: {
    backgroundColor: Colors.light.background,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: Colors.light.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.light.border,
    marginLeft: 52,
  },
});
