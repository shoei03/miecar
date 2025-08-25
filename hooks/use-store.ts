import { create } from 'zustand';

interface DayStoreState {
  today: Date;
  currentYear: number;
  currentMonth: number;
  currentDate: number;
}

export const useDayStore = create<DayStoreState>(set => ({
  today: new Date(),
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  currentDate: new Date().getDate(),
  setCurrentYear: (year: number) => set({ currentYear: year }),
  setCurrentMonth: (month: number) => set({ currentMonth: month }),
  setCurrentDate: (date: number) => set({ currentDate: date }),
}));
