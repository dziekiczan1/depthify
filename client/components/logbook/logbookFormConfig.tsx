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
  bestTimeStart: z.string().refine((val) => monthValues.includes(val), {
    message: 'Best month is required',
  }),
  bestTimeEnd: z.string().refine((val) => monthValues.includes(val), {
    message: 'Best month is required',
  }),
});

export const stepTwoSchema = z.object({
  stats: z.object({
    temperature: z
      .string()
      .min(1, 'Dive site is required')
      .max(2, 'Temperature must be at most 2 digits'),
    visibility: z
      .string()
      .min(1, 'Dive site is required')
      .max(2, 'Visibility must be at most 2 digits'),
    depth: z.string().min(1, 'Dive site is required').max(3, 'Depth must be at most 3 digits'),
    time: z.string().min(1, 'Dive site is required').max(4, 'Time must be at most 2 digits'),
  }),
  attractions: z
    .string()
    .min(1, 'At least one attraction is required')
    .refine((val) => {
      const items = val.split(',').map((v) => v.trim());
      return items.every((item) => item.length > 0 && /^[a-zA-Z\s]+$/.test(item));
    }, 'Only letters and spaces are allowed'),
  wildlife: z
    .string()
    .min(1, 'At least one wildlife is required')
    .refine((val) => {
      const items = val.split(',').map((v) => v.trim());
      return items.every((item) => item.length > 0 && /^[a-zA-Z\s]+$/.test(item));
    }, 'Only letters and spaces are allowed'),
});

export const diveFormSchema = stepOneSchema.and(stepTwoSchema);

export type DiveFormValues = z.infer<typeof diveFormSchema>;
