import * as z from 'zod';
import { countries } from '@/lib/logbook/countries';

export const diveFormSchema = z.object({
  title: z.string().min(2, 'Nazwa jest wymagana'),
  country: z.string().refine((val) => countries.some((c) => c.value === val), {
    message: 'Wybierz prawidłowy kraj',
  }),
  date: z.string().min(1, 'Data jest wymagana'),
  rating: z.number().min(1).max(5),
  level: z.string(),
  description: z.string().optional(),
  temperature: z.string().optional(),
  visibility: z.string().optional(),
  depth: z.string().optional(),
  time: z.string().optional(),
  bestTime: z.string().optional(),
  attractions: z.array(z.string()).optional(),
  wildlife: z.array(z.string()).optional(),
});

export type DiveFormValues = z.infer<typeof diveFormSchema>;
