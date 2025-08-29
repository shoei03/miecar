import { useState } from 'react';

import {
  type ValidationResult,
  validateCurrentPassword,
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirmation,
  // validateRequiredField,
  validateStartTime,
  validateEndTime,
  validateDate,
} from '@/lib/validation';

interface newErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  currentPassword?: string;
  startTime?: string;
  endTime?: string;
  date?: string;
}

export function useValidation() {
  const [errors, setErrors] = useState<newErrors>({});

  const validate = (
    fields: string[],
    values: Record<string, string>
  ): boolean => {
    const newErrors: newErrors = {};

    // 各フィールドのバリデーションを実行
    fields.forEach(field => {
      switch (field) {
        case 'name': {
          const validationResult: ValidationResult = validateName(values.name);
          if (validationResult.isValid === false) {
            newErrors.name = validationResult.message || 'Invalid name';
          }
          break;
        }
        case 'email': {
          const validationResult: ValidationResult = validateEmail(
            values.email
          );
          if (validationResult.isValid === false) {
            newErrors.email = validationResult.message || 'Invalid email';
          }
          break;
        }
        case 'password': {
          const validationResult: ValidationResult = validatePassword(
            values.password
          );
          if (validationResult.isValid === false) {
            newErrors.password = validationResult.message || 'Invalid password';
          }
          break;
        }
        case 'confirmPassword': {
          const validationResult: ValidationResult =
            validatePasswordConfirmation(
              values.password,
              values.confirmPassword
            );
          if (validationResult.isValid === false) {
            newErrors.confirmPassword =
              validationResult.message || 'Invalid password confirmation';
          }
          break;
        }
        case 'currentPassword': {
          const validationResult: ValidationResult = validateCurrentPassword(
            values.currentPassword
          );
          if (validationResult.isValid === false) {
            newErrors.currentPassword =
              validationResult.message || 'Invalid current password';
          }
          break;
        }
        case 'startTime': {
          const validationResult: ValidationResult = validateStartTime(
            values.startTime
          );
          if (validationResult.isValid === false) {
            newErrors.startTime =
              validationResult.message || 'Invalid start time';
          }
          break;
        }
        case 'endTime': {
          const validationResult: ValidationResult = validateEndTime(
            values.startTime,
            values.endTime
          );
          if (validationResult.isValid === false) {
            newErrors.endTime = validationResult.message || 'Invalid end time';
          }
          break;
        }
        case 'date': {
          const validationResult: ValidationResult = validateDate(values.date);
          if (validationResult.isValid === false) {
            newErrors.date = validationResult.message || 'Invalid date';
          }
          break;
        }
        default:
          break;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // 全てのフィールドが有効な場合はtrueを返す
  };

  const clearErrors = () => {
    setErrors({});
  };

  return { errors, validate, clearErrors };
}
