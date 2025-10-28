import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Thermometer, Eye, ArrowDownCircle, Clock, AlignLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { DiveFormValues } from '@/components/logbook/logbookFormConfig';
import { DiveStatUnit } from '@/lib/homepage/dives';

export const StepTwo = ({ form }: { form: UseFormReturn<DiveFormValues> }) => (
  <>
    <FormField
      control={form.control}
      name="stats.temperature"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Temperature</FormLabel>
          <div className="relative max-h-10">
            <Thermometer className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <FormControl>
              <Input type="number" placeholder="22" {...field} className="px-9" />
            </FormControl>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              {DiveStatUnit.CELSIUS}
            </span>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="stats.visibility"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Visibility</FormLabel>
          <div className="relative max-h-10">
            <Eye className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <FormControl>
              <Input type="number" placeholder="10" {...field} className="px-9" />
            </FormControl>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              {DiveStatUnit.METER}
            </span>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="stats.depth"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Max depth</FormLabel>
          <div className="relative max-h-10">
            <ArrowDownCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <FormControl>
              <Input type="number" placeholder="18" {...field} className="px-9" />
            </FormControl>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              {DiveStatUnit.METER}
            </span>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="stats.time"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Dive time</FormLabel>
          <div className="relative max-h-10">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <FormControl>
              <Input type="number" placeholder="45" {...field} className="px-9" />
            </FormControl>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              {DiveStatUnit.MINUTES}
            </span>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <div className="relative">
            <AlignLeft className="absolute left-3 top-3 text-muted-foreground icon-size-sm" />
            <FormControl>
              <Input placeholder="Write your dive notes..." {...field} className="pl-9" />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
