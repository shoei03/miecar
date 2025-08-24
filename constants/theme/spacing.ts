/**
 * 家族車共有アプリ用スペーシングシステム
 * 8pxベースのグリッドシステムを採用
 */

// ベーススペーシング（8px）
const base = 8;

// スペーシングスケール
export const spacing = {
  // 基本スペーシング
  xs: base * 0.5, // 4px
  sm: base, // 8px
  md: base * 1.5, // 12px
  lg: base * 2, // 16px
  xl: base * 3, // 24px
  xxl: base * 4, // 32px
  xxxl: base * 6, // 48px

  // コンポーネント間のスペーシング
  component: {
    xs: base * 0.5, // 4px
    sm: base, // 8px
    md: base * 1.5, // 12px
    lg: base * 2, // 16px
    xl: base * 3, // 24px
    xxl: base * 4, // 32px
  },

  // セクション間のスペーシング
  section: {
    sm: base * 3, // 24px
    md: base * 4, // 32px
    lg: base * 6, // 48px
    xl: base * 8, // 64px
    xxl: base * 12, // 96px
  },

  // ページ間のスペーシング
  page: {
    sm: base * 4, // 32px
    md: base * 6, // 48px
    lg: base * 8, // 64px
    xl: base * 12, // 96px
  },
};

// パディング
export const padding = {
  // コンポーネント内のパディング
  component: {
    xs: spacing.xs, // 4px
    sm: spacing.sm, // 8px
    md: spacing.md, // 12px
    lg: spacing.lg, // 16px
    xl: spacing.xl, // 24px
  },

  // カードのパディング
  card: {
    sm: spacing.md, // 12px
    md: spacing.lg, // 16px
    lg: spacing.xl, // 24px
  },

  // モーダルのパディング
  modal: {
    sm: spacing.lg, // 16px
    md: spacing.xl, // 24px
    lg: spacing.xxl, // 32px
  },

  // スクリーンのパディング
  screen: {
    sm: spacing.lg, // 16px
    md: spacing.xl, // 24px
    lg: spacing.xxl, // 32px
  },
};

// マージン
export const margin = {
  // コンポーネント間のマージン
  component: {
    xs: spacing.xs, // 4px
    sm: spacing.sm, // 8px
    md: spacing.md, // 12px
    lg: spacing.lg, // 16px
    xl: spacing.xl, // 24px
  },

  // セクション間のマージン
  section: {
    sm: spacing.xl, // 24px
    md: spacing.xxl, // 32px
    lg: spacing.xxxl, // 48px
  },
};

// ボーダー半径
export const borderRadius = {
  // 基本ボーダー半径
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,

  // コンポーネント別ボーダー半径
  button: {
    sm: 4,
    md: 8,
    lg: 12,
  },

  card: {
    sm: 8,
    md: 12,
    lg: 16,
  },

  input: {
    sm: 4,
    md: 8,
    lg: 12,
  },

  modal: {
    sm: 12,
    md: 16,
    lg: 20,
  },
};

// シャドウ
export const shadow = {
  // 基本シャドウ
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 16,
  },
};

// レイアウト
export const layout = {
  // コンテナの最大幅
  maxWidth: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },

  // ヘッダーの高さ
  header: {
    height: 56,
    paddingHorizontal: spacing.lg,
  },

  // タブバーの高さ
  tabBar: {
    height: 80,
    paddingBottom: spacing.md,
  },

  // ボタンの高さ
  button: {
    sm: 32,
    md: 44,
    lg: 56,
  },

  // 入力フィールドの高さ
  input: {
    sm: 36,
    md: 44,
    lg: 52,
  },

  // アイコンのサイズ
  icon: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
};

// アニメーション
export const animation = {
  // トランジション時間
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
  },

  // イージング
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

export default {
  spacing,
  padding,
  margin,
  borderRadius,
  shadow,
  layout,
  animation,
};
