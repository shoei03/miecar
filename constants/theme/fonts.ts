/**
 * 家族車共有アプリ用フォントシステム
 * 日本語と英語の両方をサポート
 */

// フォントファミリー
export const fontFamily = {
  // 日本語フォント（Noto Sans JP）
  japanese: {
    regular: 'NotoSansJP-Regular',
    medium: 'NotoSansJP-Medium',
    bold: 'NotoSansJP-Bold',
    light: 'NotoSansJP-Light',
  },
  // 英語フォント（システムフォント）
  english: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    light: 'System',
  },
  // モノスペースフォント（コード表示用）
  monospace: {
    regular: 'SpaceMono-Regular',
  },
};

// フォントサイズ
export const fontSize = {
  // 見出し
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 16,

  // 本文
  body: {
    large: 18,
    medium: 16,
    small: 14,
    xsmall: 12,
  },

  // ボタン
  button: {
    large: 18,
    medium: 16,
    small: 14,
  },

  // キャプション
  caption: {
    large: 14,
    medium: 12,
    small: 10,
  },

  // アイコン
  icon: {
    large: 24,
    medium: 20,
    small: 16,
    xsmall: 12,
  },
};

// フォントウェイト
export const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

// 行間
export const lineHeight = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
};

// 文字間隔
export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
};

// テキストスタイルのプリセット
export const textStyles = {
  // 見出しスタイル
  h1: {
    fontSize: fontSize.h1,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.h1 * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontSize: fontSize.h2,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.h2 * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontSize: fontSize.h3,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.h3 * lineHeight.tight,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontSize: fontSize.h4,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.h4 * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontSize: fontSize.h5,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.h5 * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontSize: fontSize.h6,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.h6 * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  // 本文スタイル
  bodyLarge: {
    fontSize: fontSize.body.large,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.body.large * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodyMedium: {
    fontSize: fontSize.body.medium,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.body.medium * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodySmall: {
    fontSize: fontSize.body.small,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.body.small * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodyXSmall: {
    fontSize: fontSize.body.xsmall,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.body.xsmall * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  // ボタンスタイル
  buttonLarge: {
    fontSize: fontSize.button.large,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.button.large * lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },
  buttonMedium: {
    fontSize: fontSize.button.medium,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.button.medium * lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },
  buttonSmall: {
    fontSize: fontSize.button.small,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.button.small * lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },

  // キャプションスタイル
  captionLarge: {
    fontSize: fontSize.caption.large,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.caption.large * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  captionMedium: {
    fontSize: fontSize.caption.medium,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.caption.medium * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  captionSmall: {
    fontSize: fontSize.caption.small,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.caption.small * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  // ラベルスタイル
  label: {
    fontSize: fontSize.body.small,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.body.small * lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },

  // リンクスタイル
  link: {
    fontSize: fontSize.body.medium,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.body.medium * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    textDecorationLine: 'underline',
  },
};

export default {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textStyles,
};
