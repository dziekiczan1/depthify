import { useState } from 'react';

export const usePasswordVisibility = (fields: string[] = []) => {
  const initialState: Record<string, boolean> = {};

  fields.forEach((field) => {
    initialState[field] = false;
  });

  const [passwordVisibility, setPasswordVisibility] =
    useState<Record<string, boolean>>(initialState);

  const togglePasswordVisibility = (fieldName: string) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  return { passwordVisibility, togglePasswordVisibility };
};
