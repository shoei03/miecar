import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';

import { SettingItem } from '@/components/ui/SettingItem';
import { SettingLinkItem } from '@/components/ui/SettingLinkItem';
import { Colors } from '@/constants/Colors';
import { textSettingsScreen } from '@/constants/Texts';

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
          <SectionHeader title={textSettingsScreen.account} />
          <View style={styles.section}>
            <SettingItem
              icon='log-out-outline'
              title={textSettingsScreen.logout}
              onPress={handleLogout}
            />
          </View>

          <SectionHeader title={textSettingsScreen.security} />
          <View style={styles.section}>
            <SettingLinkItem
              icon='key-outline'
              title={textSettingsScreen.changePassword}
              href='/auth/change-password'
            />
            <View style={styles.separator} />
            <SettingLinkItem
              icon='mail-outline'
              title={textSettingsScreen.changeEmail}
              href='/auth/change-email'
            />
            <View style={styles.separator} />
            <SettingLinkItem
              icon='shield-checkmark-outline'
              title={textSettingsScreen.privacy}
              href='/auth/privacy-settings'
            />
          </View>

          <View style={styles.section}>
            <SettingItem
              icon='trash-outline'
              title={textSettingsScreen.deleteAccount}
              onPress={handleDeleteAccount}
              type='destructive'
            />
          </View>
        </>
      ) : (
        <>
          <SectionHeader title={textSettingsScreen.account} />
          <View style={styles.section}>
            <SettingLinkItem
              icon='log-in-outline'
              title={textSettingsScreen.login}
              href='/auth/login'
            />
            <View style={styles.separator} />
            <SettingLinkItem
              icon='person-add-outline'
              title={textSettingsScreen.signup}
              href='/auth/signup'
            />
          </View>
        </>
      )}

      <SectionHeader title={textSettingsScreen.general} />
      <View style={styles.section}>
        <SettingLinkItem
          icon='notifications-outline'
          title={textSettingsScreen.notifications}
          href='(settings)/general/notification-settings'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='color-palette-outline'
          title={textSettingsScreen.theme}
          href='(settings)/general/theme-settings'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='language-outline'
          title={textSettingsScreen.language}
          href='(settings)/general/language-settings'
        />
      </View>

      <SectionHeader title={textSettingsScreen.support} />
      <View style={styles.section}>
        <SettingLinkItem
          icon='help-circle-outline'
          title={textSettingsScreen.help}
          href='(settings)/support/help'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='mail-outline'
          title={textSettingsScreen.contact}
          href='(settings)/support/contact'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='chatbubble-outline'
          title={textSettingsScreen.feedback}
          href='(settings)/support/feedback'
        />
      </View>

      <SectionHeader title={textSettingsScreen.about} />
      <View style={styles.section}>
        <SettingLinkItem
          icon='information-circle-outline'
          title={textSettingsScreen.version}
          href='(settings)/about/version-info'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='document-text-outline'
          title={textSettingsScreen.termsOfService}
          href='(settings)/about/terms-of-service'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='lock-closed-outline'
          title={textSettingsScreen.privacyPolicy}
          href='(settings)/about/privacy-policy'
        />
        <View style={styles.separator} />
        <SettingLinkItem
          icon='library-outline'
          title={textSettingsScreen.licenses}
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
