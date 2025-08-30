export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  createdAt: Date;
}

export interface ProfileUpdateData {
  displayName?: string;
}
