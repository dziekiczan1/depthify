import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { DiveFormValues } from '@/components/logbook/logbookFormConfig';

export const StepTwo = ({ form }: { form: UseFormReturn<DiveFormValues> }) => (
  <>
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Input placeholder="Write your dive notes..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
