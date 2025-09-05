'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { usePasswordVisibility } from '@/lib/formUtils';
import { formSchema, getFormFields } from './loginFormConfig';
import type { FormValues } from './loginFormConfig';
import { loginUser } from '@/actions/login';
import { useState, useTransition } from 'react';
import { FormError } from '@/components/form/form-error';
import { FormSuccess } from '@/components/form/form-success';
import Loader from '@/components/ui/loader';

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const { passwordVisibility, togglePasswordVisibility } = usePasswordVisibility(['password']);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      loginUser(values, '/')
        .then((result) => {
          if (result?.error) {
            setError(result.error);
          }

          if (result?.success) {
            setSuccess('Login successful!');
            if (result.redirectTo) {
              router.push(result.redirectTo);
            }
          }
        })
        .catch(() => setError('Something went wrong'));
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {getFormFields().map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: hookField }) => (
              <FormItem className={field.className}>
                <FormLabel className={`text-slate-700`}>{field.label}</FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      placeholder={field.placeholder}
                      disabled={isPending}
                      aria-invalid={!!form.formState.errors[field.name]}
                      type={
                        field.isPassword
                          ? passwordVisibility[field.name as string]
                            ? 'text'
                            : 'password'
                          : field.type || 'text'
                      }
                      {...hookField}
                      className={`pl-10`}
                    />
                    {field.icon}

                    {field.isPassword && (
                      <Button
                        type="button"
                        variant={`plain`}
                        onClick={() => togglePasswordVisibility(field.name as string)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        {passwordVisibility[field.name as string] ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </Button>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <FormError message={error} />
        <FormSuccess message={success} />
        {isPending ? (
          <Loader />
        ) : (
          <Button
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center items-center gap-2"
            size="lg">
            Login
            <ArrowRight
              size={24}
              className="text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </Button>
        )}
      </form>
    </Form>
  );
};

export default LoginForm;
