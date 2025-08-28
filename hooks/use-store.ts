import { create } from 'zustand';

import type { ScheduleType } from '@/mock/schedule';

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
  setCurrentYear: (year: number) => void;
  setCurrentMonth: (month: number) => void;
  setCurrentDate: (date: number) => void;
  setDaysInMonth: (currentYear: number, currentMonth: number) => void;
  setFirstDayOfMonth: (currentYear: number, currentMonth: number) => void;
  setViewMode: (viewMode: 'calendar' | 'list') => void;
  setMockSchedules: (schedules: ScheduleType[]) => void;
}

export const useDayStore = create<DayStoreState>(set => ({
  today: new Date(),
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  currentDate: new Date().getDate(),
  daysInMonth: new Date().getDate(),
  firstDayOfMonth: new Date().getDay(),
  initialDate: new Date().getDate(),
  viewMode: 'calendar',
  mockSchedules: [],
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
}));
