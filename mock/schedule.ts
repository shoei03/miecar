export interface ScheduleType {
  id: string;
  userId: string;
  userName: string;
  startTime: string;
  endTime: string;
  purpose: string;
  color: string;
  date: number;
}

export const mockSchedules: ScheduleType[] = [
  {
    id: '1',
    userId: '1',
    userName: 'お父さん',
    startTime: '15:30',
    endTime: '20:00',
    purpose: 'ソフトボードカフェ',
    color: '#34C759',
    date: 8,
  },
  {
    id: '2',
    userId: '2',
    userName: 'お母さん',
    startTime: '10:00',
    endTime: '12:00',
    purpose: '買い物',
    color: '#FF9500',
    date: 5,
  },
  {
    id: '3',
    userId: '3',
    userName: '子供A',
    startTime: '13:00',
    endTime: '15:00',
    purpose: 'サッカー',
    color: '#007AFF',
    date: 12,
  },
  {
    id: '4',
    userId: '4',
    userName: '子供B',
    startTime: '09:00',
    endTime: '11:00',
    purpose: 'ピアノ教室',
    color: '#AF52DE',
    date: 8,
  },
  {
    id: '5',
    userId: '1',
    userName: 'お父さん',
    startTime: '18:00',
    endTime: '19:00',
    purpose: '会議',
    color: '#34C759',
    date: 20,
  },
  {
    id: '6',
    userId: '2',
    userName: 'お母さん',
    startTime: '14:00',
    endTime: '16:00',
    purpose: '友達とランチ',
    color: '#FF9500',
    date: 15,
  },
  {
    id: '7',
    userId: '3',
    userName: '子供A',
    startTime: '16:00',
    endTime: '18:00',
    purpose: '塾',
    color: '#007AFF',
    date: 22,
  },
  {
    id: '8',
    userId: '4',
    userName: '子供B',
    startTime: '11:00',
    endTime: '12:00',
    purpose: '図書館',
    color: '#AF52DE',
    date: 25,
  },
];
