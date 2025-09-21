'use client';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {diveFormSchema, DiveFormValues} from './logbookFormConfig';
import {Button} from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {useState} from 'react';
import {countries} from '@/lib/logbook/countries';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {Calendar, ChartColumn, Clock, Globe, MapPin} from 'lucide-react';
import {CalendarField} from '@/components/ui/date';
import {formatDate, parseDate} from '@/lib/date';
import {DiveStatUnit} from "@/lib/homepage/dives";
import {DiveLevel} from "@/lib/homepage/map";
import {diveLevelLabels} from "@/lib/logbook/level";

export function LogbookForm() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<DiveFormValues>({
        resolver: zodResolver(diveFormSchema),
        defaultValues: {
            title: '',
            country: '',
            date: '',
            rating: 3,
            level: '',
            description: '',
        },
    });

    const onSubmit = async (values: DiveFormValues) => {
        setIsLoading(true);
        try {
            const res = await fetch('http://localhost:8000/dives', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values),
            });
            if (!res.ok) throw new Error('Błąd zapisu nurkowania');
            const data = await res.json();
            console.log('Saved dive:', data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="date"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Calendar
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm"/>
                                    <CalendarField
                                        value={parseDate(field.value)}
                                        onChange={(date) => field.onChange(date ? formatDate(date) : '')}
                                        className="pl-9"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="time"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Time</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Clock
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm"/>
                                    <Input placeholder="48" {...field} className="px-9"/>
                                    <span
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">{DiveStatUnit.MINUTES}</span>
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Dive site</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <MapPin
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm"/>
                                    <Input placeholder="Blue Hole, Dahab" {...field} className="pl-9"/>
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="country"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Globe
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm"/>
                                    <Select value={field.value || ''} onValueChange={field.onChange}>
                                        <SelectTrigger className="pl-9">
                                            <SelectValue placeholder="Select country"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map((country) => (
                                                <SelectItem key={country.value} value={country.value}>
                                                    {country.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}
                    />

                <FormField
                    control={form.control}
                    name="level"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Level</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <ChartColumn className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground icon-size-sm"/>
                                    <Select value={field.value || ''} onValueChange={field.onChange}>
                                        <SelectTrigger className="pl-9">
                                            <SelectValue placeholder="Select level"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.values(DiveLevel).map((level) => (
                                                <SelectItem key={level} value={level}>
                                                    {diveLevelLabels[level]}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isLoading} className="col-span-2">
                    {isLoading ? 'Zapisywanie...' : 'Zapisz nurkowanie'}
                </Button>
            </form>
        </Form>
    );
}
