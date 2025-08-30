import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState, version } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

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

  const SettingItem = ({
    icon,
    title,
    onPress,
    type = 'default',
  }: {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    onPress?: () => void;
    type?: 'default' | 'destructive';
  }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.settingItemContent}>
        <Ionicons
          name={icon}
          size={24}
          color={type === 'destructive' ? '#FF3B30' : '#007AFF'}
          style={styles.icon}
        />
        <Text
          style={[
            styles.settingText,
            type === 'destructive' && styles.destructiveText,
          ]}
        >
          {title}
        </Text>
      </View>
      <Ionicons name='chevron-forward' size={20} color='#C7C7CC' />
    </TouchableOpacity>
  );

  const SettingLinkItem = ({
    icon,
    title,
    href,
    type = 'default',
  }: {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    href: string;
    type?: 'default' | 'destructive';
  }) => (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
        <View style={styles.settingItemContent}>
          <Ionicons
            name={icon}
            size={24}
            color={type === 'destructive' ? '#FF3B30' : '#007AFF'}
            style={styles.icon}
          />
          <Text
            style={[
              styles.settingText,
              type === 'destructive' && styles.destructiveText,
            ]}
          >
            {title}
          </Text>
        </View>
        <Ionicons name='chevron-forward' size={20} color='#C7C7CC' />
      </TouchableOpacity>
    </Link>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>{text.title}</Text>
      </View>

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
    backgroundColor: '#F2F2F7',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '400',
    color: '#6D6D72',
    textTransform: 'uppercase',
    marginTop: 30,
    marginBottom: 8,
    marginHorizontal: 20,
    letterSpacing: 0.5,
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 50,
  },
  settingItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 12,
    width: 24,
  },
  settingText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
    flex: 1,
  },
  destructiveText: {
    color: '#FF3B30',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#C6C6C8',
    marginLeft: 52,
  },
});
