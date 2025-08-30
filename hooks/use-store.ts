import { create } from 'zustand';

import type { ScheduleType } from '@/mock/schedule';
import type { UserProfile } from '@/types/user';

interface DayStoreState {
  today: Date;
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  daysInMonth: number;
  firstDayOfMonth: number;
  initialDate: number;
  viewMode: 'calendar' | 'list';
  mockSchedules: ScheduleType[];
  isModalVisible: boolean;
  setCurrentYear: (year: number) => void;
  setCurrentMonth: (month: number) => void;
  setCurrentDate: (date: number) => void;
  setDaysInMonth: (currentYear: number, currentMonth: number) => void;
  setFirstDayOfMonth: (currentYear: number, currentMonth: number) => void;
  setViewMode: (viewMode: 'calendar' | 'list') => void;
  setMockSchedules: (schedules: ScheduleType[]) => void;
  setModalVisible: (visible: boolean) => void;
}

export const useDayStore = create<DayStoreState>(set => ({
  today: new Date(),
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth() + 1,
  currentDate: new Date().getDate(),
  daysInMonth: new Date().getDate(),
  firstDayOfMonth: new Date().getDay(),
  initialDate: new Date().getDate(),
  viewMode: 'calendar',
  mockSchedules: [],
  isModalVisible: false,
  setCurrentYear: (year: number) => set({ currentYear: year }),
  setCurrentMonth: (month: number) => set({ currentMonth: month }),
  setCurrentDate: (date: number) => set({ currentDate: date }),
  setDaysInMonth: (currentYear: number, currentMonth: number) =>
    set(() => ({
      daysInMonth: new Date(currentYear, currentMonth + 1, 0).getDate(),
    })),
  setFirstDayOfMonth: (currentYear: number, currentMonth: number) =>
    set(() => ({
      firstDayOfMonth: new Date(currentYear, currentMonth, 1).getDay(),
    })),
  setViewMode: (viewMode: 'calendar' | 'list') => set({ viewMode }),
  setMockSchedules: (schedules: ScheduleType[]) =>
    set({ mockSchedules: schedules }),
  setModalVisible: (visible: boolean) => set({ isModalVisible: visible }),
}));

interface UserStoreState {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
}

export const useUserStore = create<UserStoreState>(set => ({
  user: {
    uid: 'user123',
    email: 'shoei@gmail.com',
    displayName: 'しょーん',
    createdAt: new Date(),
  },
  setUser: (user: UserProfile | null) => set({ user }),
}));

interface AuthStoreState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<AuthStoreState>(set => ({
  isAuthenticated: true,
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));
