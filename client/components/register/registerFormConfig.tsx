import { Mail, User, Lock } from 'lucide-react';
import { z } from 'zod';
import React from 'react';

export const formSchema = z
  .object({
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
    confirmPassword: z.string().min(6, { message: 'Confirm your password.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
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
    name: 'firstName',
    label: 'First Name',
    placeholder: 'First Name',
    icon: (
      <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
    ),
    className: 'w-half-gap',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Last Name',
    icon: (
      <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
    ),
    className: 'w-half-gap',
  },
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
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    type: 'password',
    icon: (
      <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
    ),
    className: 'w-full',
    isPassword: true,
  },
];
