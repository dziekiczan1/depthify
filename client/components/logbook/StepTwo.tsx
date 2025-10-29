import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Thermometer, Eye, ArrowDownCircle, Clock, AlignLeft, Mountain, Fish } from 'lucide-react';
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
      name="attractions"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Attractions</FormLabel>
          <div className="relative">
            <Mountain className="absolute left-3 top-3 text-muted-foreground icon-size-sm" />
            <FormControl>
              <Input
                placeholder="Volcanic rock formations, Natural trench"
                {...field}
                className="pl-9"
                onChange={(e) => field.onChange(e.target.value.split(',').map((v) => v.trim()))}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="wildlife"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Wildlife</FormLabel>
          <div className="relative">
            <Fish className="absolute left-3 top-3 text-muted-foreground icon-size-sm" />
            <FormControl>
              <Input
                placeholder="Tropical fish, Sea turtle"
                {...field}
                className="pl-9"
                onChange={(e) => field.onChange(e.target.value.split(',').map((v) => v.trim()))}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
