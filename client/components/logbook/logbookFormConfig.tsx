import * as z from 'zod';
import { countries } from '@/lib/logbook/countries';
import {DiveLevel} from "@/lib/homepage/map";
import {diveRatingLabels} from "@/lib/logbook/level";

const diveLevels = Object.values(DiveLevel) as [string, ...string[]];
const ratingValues = Object.keys(diveRatingLabels) as [string, ...string[]];

export const stepOneSchema = z.object({
  title: z.string().min(2, 'Dive site is required'),
  country: z.string().refine((val) => countries.some((c) => c.value === val), {
    message: 'Please select a valid country',
  }),
  date: z.string().min(1, 'Date is required'),
  rating: z.enum(ratingValues, {
    message: "Please select dive rating",
  }),
  level: z.enum(diveLevels, {
    message: "Please select dive level",
  }),
  time: z
      .string()
      .min(1, 'Time is required')
      .max(4, 'Time must be at most 4 digits')
      .refine((val) => /^[1-9]\d{0,3}$/.test(val), 'Time must be a number between 1 and 9999')
});

export const stepTwoSchema = z.object({
  description: z.string().min(1, "Description is required"),
});

export const diveFormSchema = stepOneSchema.and(stepTwoSchema);

export type DiveFormValues = z.infer<typeof diveFormSchema>;
