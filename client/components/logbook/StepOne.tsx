import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Calendar, Clock, MapPin, Globe, ChartColumn, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CalendarField } from '@/components/ui/date';
import { formatDate, parseDate } from '@/lib/date';
import { countries } from '@/lib/logbook/countries';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DiveLevel } from '@/lib/homepage/map';
import { diveLevelLabels, diveRatings, diveRatingLabels } from '@/lib/logbook/level';
import { DiveFormValues } from '@/components/logbook/logbookFormConfig';
import { UseFormReturn } from 'react-hook-form';
import { months } from '@/lib/logbook/monts';

export const StepOne = ({ form }: { form: UseFormReturn<DiveFormValues> }) => (
  <>
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Date</FormLabel>
          <div className="relative max-h-10">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <FormControl>
              <CalendarField
                value={parseDate(field.value)}
                onChange={(date) => field.onChange(date ? formatDate(date) : '')}
                className="pl-9"
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Dive site</FormLabel>
          <div className="relative max-h-10">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <FormControl>
              <Input placeholder="Blue Hole, Dahab" {...field} className="pl-9" />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="country"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Country</FormLabel>
          <div className="relative max-h-10">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <Select value={field.value || ''} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger className="pl-9">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="level"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Level</FormLabel>
          <div className="relative max-h-10">
            <ChartColumn className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <Select value={field.value || ''} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger className="pl-9">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.values(DiveLevel).map((level) => (
                  <SelectItem key={level} value={level}>
                    {diveLevelLabels[level]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="bestTimeStart"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Best time</FormLabel>
            <div className="relative max-h-10">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
              <Select value={field.value || ''} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="pl-9">
                    <SelectValue placeholder="Start month" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="bestTimeEnd"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Best time</FormLabel>
            <div className="relative max-h-10">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
              <Select value={field.value || ''} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="pl-9">
                    <SelectValue placeholder="End month" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>

    <FormField
      control={form.control}
      name="rating"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Rating</FormLabel>
          <div className="relative max-h-10">
            <Star className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm" />
            <Select value={field.value?.toString() || ''} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger className="pl-9">
                  <SelectValue placeholder="Rate the dive" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {diveRatings.map((rating) => (
                  <SelectItem key={rating} value={rating.toString()}>
                    {diveRatingLabels[rating.toString()]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
