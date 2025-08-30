/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    subText: '#6D6D72',
    background: '#fff',
    subBackground: '#F2F2F7',
    border: '#E5E5EA',
    tint: tintColorLight,
    error: '#FF3B30',
    success: '#4CD964',
    warning: '#FF9500',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    shadow: '#000000',
  },
  dark: {
    text: '#ECEDEE',
    subText: '#9CA3AF',
    background: '#151718',
    subBackground: '#1C1C1E',
    border: '#E5E5EA',
    tint: tintColorDark,
    error: '#FF3B30',
    success: '#4CD964',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    shadow: '#000000',
  },
};
