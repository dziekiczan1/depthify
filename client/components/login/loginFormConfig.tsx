import { Mail, Lock } from 'lucide-react';
import { z } from 'zod';
import React from 'react';

export const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

export type FormValues = z.infer<typeof formSchema>;

export type FormField = {
  name: keyof FormValues;
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
  className?: string;
  isPassword?: boolean;
};

export const getFormFields = (): FormField[] => [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
    icon: (
      <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
    ),
    className: 'w-full',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    icon: (
      <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
    ),
    className: 'w-full',
    isPassword: true,
  },
];
