import * as z from 'zod';
import { countries } from '@/lib/logbook/countries';
import { DiveLevel } from '@/lib/homepage/map';
import { diveRatingLabels } from '@/lib/logbook/level';
import { months } from '@/lib/logbook/monts';

const diveLevels = Object.values(DiveLevel) as [string, ...string[]];
const ratingValues = Object.keys(diveRatingLabels) as [string, ...string[]];
const monthValues = months.map((m) => m.value) as [string, ...string[]];

export const stepOneSchema = z.object({
  title: z.string().min(2, 'Dive site is required'),
  country: z.string().refine((val) => countries.some((c) => c.value === val), {
    message: 'Please select a valid country',
  }),
  date: z.string().min(1, 'Date is required'),
  rating: z.enum(ratingValues, {
    message: 'Please select dive rating',
  }),
  level: z.enum(diveLevels, {
    message: 'Please select dive level',
  }),
  bestTimeStart: z
    .enum(monthValues)
    .refine((val) => val !== '', { message: 'Best month is required' }),
  bestTimeEnd: z
    .enum(monthValues)
    .refine((val) => val !== '', { message: 'Best month is required' }),
});

export const stepTwoSchema = z.object({
  stats: z.object({
    temperature: z
      .string()
      .min(1, 'Temperature is required')
      .refine((val) => /^-?\d+(\.\d+)?$/.test(val), 'Temperature must be a number'),
    visibility: z
      .string()
      .min(1, 'Visibility is required')
      .refine((val) => /^[1-9]\d*$/.test(val), 'Visibility must be a positive number'),
    depth: z
      .string()
      .min(1, 'Depth is required')
      .refine((val) => /^[1-9]\d*$/.test(val), 'Depth must be a positive number'),
    time: z
      .string()
      .min(1, 'Time is required')
      .max(4, 'Time must be at most 4 digits')
      .refine((val) => /^[1-9]\d{0,3}$/.test(val), 'Time must be a number between 1 and 9999'),
  }),
  attractions: z
    .array(z.string().min(1, 'Attraction cannot be empty'))
    .min(1, 'At least one attraction is required')
    .optional(),

  wildlife: z
    .array(z.string().min(1, 'Wildlife item cannot be empty'))
    .min(1, 'At least one wildlife item is required')
    .optional(),
});

export const diveFormSchema = stepOneSchema.and(stepTwoSchema);

export type DiveFormValues = z.infer<typeof diveFormSchema>;
