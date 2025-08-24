/**
 * 家族車共有アプリ用カラーテーマシステム
 * ライトモードとダークモードの両方をサポート
 */

// プライマリカラー（車のイメージに合わせた青系）
const primary = {
  50: '#E3F2FD',
  100: '#BBDEFB',
  200: '#90CAF9',
  300: '#64B5F6',
  400: '#42A5F5',
  500: '#2196F3', // メインプライマリ
  600: '#1E88E5',
  700: '#1976D2',
  800: '#1565C0',
  900: '#0D47A1',
};

// セカンダリカラー（アクセント用のオレンジ系）
const secondary = {
  50: '#FFF3E0',
  100: '#FFE0B2',
  200: '#FFCC80',
  300: '#FFB74D',
  400: '#FFA726',
  500: '#FF9800', // メインセカンダリ
  600: '#FB8C00',
  700: '#F57C00',
  800: '#EF6C00',
  900: '#E65100',
};

// 成功・警告・エラーカラー
const semantic = {
  success: {
    50: '#E8F5E8',
    100: '#C8E6C9',
    500: '#4CAF50',
    700: '#388E3C',
  },
  warning: {
    50: '#FFF8E1',
    100: '#FFECB3',
    500: '#FFC107',
    700: '#FFA000',
  },
  error: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    500: '#F44336',
    700: '#D32F2F',
  },
  info: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    500: '#2196F3',
    700: '#1976D2',
  },
};

// グレースケール
const gray = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#EEEEEE',
  300: '#E0E0E0',
  400: '#BDBDBD',
  500: '#9E9E9E',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

// ライトモードテーマ
export const lightTheme = {
  // 基本色
  primary: primary[500],
  secondary: secondary[500],

  // 背景色
  background: {
    primary: '#FFFFFF',
    secondary: gray[50],
    tertiary: gray[100],
    card: '#FFFFFF',
    modal: '#FFFFFF',
  },

  // テキスト色
  text: {
    primary: gray[900],
    secondary: gray[700],
    tertiary: gray[500],
    inverse: '#FFFFFF',
    disabled: gray[400],
  },

  // ボーダー色
  border: {
    primary: gray[200],
    secondary: gray[300],
    focus: primary[500],
  },

  // アイコン色
  icon: {
    primary: gray[700],
    secondary: gray[500],
    selected: primary[500],
    disabled: gray[400],
  },

  // タブ色
  tab: {
    background: '#FFFFFF',
    iconDefault: gray[500],
    iconSelected: primary[500],
    border: gray[200],
  },

  // セマンティックカラー
  success: semantic.success[500],
  warning: semantic.warning[500],
  error: semantic.error[500],
  info: semantic.info[500],

  // 予約状態カラー
  reservation: {
    confirmed: semantic.success[500],
    pending: semantic.warning[500],
    cancelled: semantic.error[500],
    completed: gray[500],
  },

  // シャドウ
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.15)',
    heavy: 'rgba(0, 0, 0, 0.2)',
  },
};

// ダークモードテーマ
export const darkTheme = {
  // 基本色
  primary: primary[400],
  secondary: secondary[400],

  // 背景色
  background: {
    primary: gray[900],
    secondary: gray[800],
    tertiary: gray[700],
    card: gray[800],
    modal: gray[800],
  },

  // テキスト色
  text: {
    primary: '#FFFFFF',
    secondary: gray[300],
    tertiary: gray[400],
    inverse: gray[900],
    disabled: gray[600],
  },

  // ボーダー色
  border: {
    primary: gray[700],
    secondary: gray[600],
    focus: primary[400],
  },

  // アイコン色
  icon: {
    primary: gray[300],
    secondary: gray[400],
    selected: primary[400],
    disabled: gray[600],
  },

  // タブ色
  tab: {
    background: gray[900],
    iconDefault: gray[400],
    iconSelected: primary[400],
    border: gray[700],
  },

  // セマンティックカラー
  success: semantic.success[500],
  warning: semantic.warning[500],
  error: semantic.error[500],
  info: semantic.info[500],

  // 予約状態カラー
  reservation: {
    confirmed: semantic.success[500],
    pending: semantic.warning[500],
    cancelled: semantic.error[500],
    completed: gray[400],
  },

  // シャドウ
  shadow: {
    light: 'rgba(0, 0, 0, 0.3)',
    medium: 'rgba(0, 0, 0, 0.4)',
    heavy: 'rgba(0, 0, 0, 0.5)',
  },
};

// カラーパレット全体をエクスポート
export const colors = {
  primary,
  secondary,
  semantic,
  gray,
  light: lightTheme,
  dark: darkTheme,
};

// デフォルトエクスポート（後方互換性のため）
export default colors;
