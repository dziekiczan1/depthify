import * as z from 'zod';
import { countries } from '@/lib/logbook/countries';
import {DiveLevel} from "@/lib/homepage/map";

const diveLevels = Object.values(DiveLevel) as [string, ...string[]];

export const diveFormSchema = z.object({
  title: z.string().min(2, 'Dive site is required'),
  country: z.string().refine((val) => countries.some((c) => c.value === val), {
    message: 'Please select a valid country',
  }),
  date: z.string().min(1, 'Date is required'),
  rating: z.number().min(1).max(5),
  level: z.enum(diveLevels, {
    message: "Please select dive level",
  }),
  description: z.string().optional(),
  temperature: z.string().optional(),
  visibility: z.string().optional(),
  depth: z.string().optional(),
  time: z.string().min(2, 'Time is required'),
  bestTime: z.string().optional(),
  attractions: z.array(z.string()).optional(),
  wildlife: z.array(z.string()).optional(),
});

export type DiveFormValues = z.infer<typeof diveFormSchema>;
