// バリデーション関数

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

// メールアドレスのバリデーション
export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, message: 'メールアドレスは必須です' };
  }

  const emailRegex = /^[^@\s]+@[^@\s]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: '正しいメールアドレスの形式で入力してください',
    };
  }

  return { isValid: true };
};

// パスワードのバリデーション
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, message: 'パスワードは必須です' };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      message: 'パスワードは6文字以上で入力してください',
    };
  }

  if (password.length > 128) {
    return {
      isValid: false,
      message: 'パスワードは128文字以下で入力してください',
    };
  }

  return { isValid: true };
};

// パスワード確認のバリデーション
export const validatePasswordConfirmation = (
  password: string,
  passwordConfirmation: string
): ValidationResult => {
  if (!passwordConfirmation) {
    return { isValid: false, message: 'パスワード確認は必須です' };
  }

  if (password !== passwordConfirmation) {
    return { isValid: false, message: 'パスワードが一致しません' };
  }

  return { isValid: true };
};

// ユーザー名のバリデーション
export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, message: 'ユーザー名は必須です' };
  }

  return { isValid: true };
};

// 空欄のバリデーション
export const validateRequiredField = (
  value: string,
  fieldName: string
): ValidationResult => {
  if (!value.trim()) {
    return { isValid: false, message: `${fieldName}は必須です` };
  }
  return { isValid: true };
};

// 現在のパスワードのバリデーション（パスワード変更時）
export const validateCurrentPassword = (
  currentPassword: string
): ValidationResult => {
  if (!currentPassword) {
    return { isValid: false, message: '現在のパスワードは必須です' };
  }

  return { isValid: true };
};

export const validateStartTime = (startTime: string): ValidationResult => {
  if (!startTime) {
    return { isValid: false, message: '開始時刻は必須です' };
  }

  return { isValid: true };
};

export const validateEndTime = (
  startTime: string,
  endTime: string
): ValidationResult => {
  if (!endTime) {
    return { isValid: false, message: '終了時刻は必須です' };
  }

  if (endTime <= startTime) {
    return {
      isValid: false,
      message: '終了時刻は開始時刻より後でなければなりません',
    };
  }

  return { isValid: true };
};

export const validateDate = (date: string): ValidationResult => {
  if (!date) {
    return { isValid: false, message: '日付は必須です' };
  }

  return { isValid: true };
};
