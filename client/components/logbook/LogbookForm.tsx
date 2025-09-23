'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { diveFormSchema, DiveFormValues } from "./logbookFormConfig";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import {StepOne} from "@/components/logbook/StepOne";
import {StepTwo} from "@/components/logbook/StepTwo";
import {StepCounter} from "@/components/logbook/StepCounter";
import {z} from "zod";

export function LogbookForm() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof diveFormSchema>>({
        resolver: zodResolver(diveFormSchema),
        defaultValues: {
            title: "",
            country: "",
            date: "",
            time: "",
            rating: "",
            level: "",
            description: "",
        },
    });

    const handleNext = async () => {
        const valid = await form.trigger([
            "date",
            "time",
            "title",
            "country",
            "level",
            "rating",
        ]);

        if (valid) {
            setStep(2);
        }
    };

    const onSubmit = async (values: DiveFormValues) => {
        setIsLoading(true);
        try {
            const res = await fetch("http://localhost:8000/dives", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (!res.ok) throw new Error("Błąd zapisu nurkowania");
            const data = await res.json();
            console.log("Saved dive:", data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form {...form}>
            <StepCounter step={step} />
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
                {step === 1 && <StepOne form={form} />}
                {step === 2 && <StepTwo form={form} />}

                <div className="col-span-2 flex justify-between">
                    {step > 1 && (
                        <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                            Back
                        </Button>
                    )}

                    {step < 2 && (
                        <Button type="button" onClick={handleNext}>
                            Next
                        </Button>
                    )}

                    {step === 2 && (
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Zapisywanie..." : "Zapisz nurkowanie"}
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    );
}
