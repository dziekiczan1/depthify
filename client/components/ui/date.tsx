'use client';

import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { formatDate } from '@/lib/date';

type CalendarFieldProps = {
  value?: Date;
  onChange: (date?: Date) => void;
  className?: string;
};

export function CalendarField({ value, onChange, className }: CalendarFieldProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={`${className ?? ''} ${!value && 'text-muted-foreground'} placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-10 w-full min-w-0 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 aria-invalid:border-destructive [&_svg:not([class*='text-'])]:text-muted-foreground focus-ring`}>
          {value ? value.toLocaleDateString() : 'Select date'}
          <ChevronDownIcon className="size-4 opacity-50" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="bg-white w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          captionLayout="dropdown"
          onSelect={(date) => {
            if (date) onChange(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
