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

import { formSchema, getFormFields, FormValues } from './registerFormConfig';
import { registerUser } from '@/actions/register';
import { useState } from 'react';
import { FormError } from '@/components/form/form-error';
import { FormSuccess } from '@/components/form/form-success';
import Loader from '@/components/ui/loader';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { signIn } from 'next-auth/react';
import { ROUTES } from '@/lib/routes';
import { usePasswordVisibility } from '@/lib/hooks/usePasswordVisibility';

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isLoading, setIsLoading] = useState(false);
  const { passwordVisibility, togglePasswordVisibility } = usePasswordVisibility([
    'password',
    'confirmPassword',
  ]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleGoogleRegister = async () => {
    try {
      await signIn('google', {
        redirectTo: ROUTES.ACCOUNT,
      });
    } catch {
      setError('Google registration failed. Please try again.');
    }
  };

  const onSubmit = async (values: FormValues) => {
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const result = await registerUser(values, ROUTES.ACCOUNT);

      if (result?.error) {
        setError(result.error);
      }

      if (result?.success) {
        form.reset();
        setSuccess('Registration successful!');
        if (result.redirectTo) router.push(result.redirectTo);
      }
    } catch {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const fields = getFormFields();

  return (
    <>
      <Button
        onClick={handleGoogleRegister}
        variant={`outline`}
        className="w-full flex justify-center items-center gap-2 mb-6"
        size="lg"
        aria-label={`Register with Google`}>
        <GoogleIcon />
        Register with Google
      </Button>
      <div className="relative mb-6" aria-hidden>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-slate-500">or</span>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-wrap gap-6"
          aria-live={`polite`}
          aria-busy={isLoading}>
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: hookField }) => (
                <FormItem className={`w-full`}>
                  <FormLabel htmlFor={field.name} className={`text-slate-700`}>
                    {field.label}
                  </FormLabel>
                  <FormControl>
                    <div className="relative w-full flex items-center">
                      <Input
                        id={field.name}
                        placeholder={field.placeholder}
                        disabled={isLoading}
                        aria-invalid={!!form.formState.errors[field.name]}
                        aria-describedby={`${field.name}-error`}
                        className={`pl-10`}
                        type={
                          field.isPassword
                            ? passwordVisibility[field.name as string]
                              ? 'text'
                              : 'password'
                            : field.type || 'text'
                        }
                        {...hookField}
                      />
                      {field.icon}

                      {field.isPassword && (
                        <Button
                          type="button"
                          variant={`plain`}
                          onClick={() => togglePasswordVisibility(field.name as string)}
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground"
                          aria-label={
                            passwordVisibility[field.name as string]
                              ? `Hide ${field.label}`
                              : `Show ${field.label}`
                          }>
                          {passwordVisibility[field.name as string] ? (
                            <EyeOff size={20} aria-hidden />
                          ) : (
                            <Eye size={20} aria-hidden />
                          )}
                        </Button>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage id={`${field.name}-error`} />
                </FormItem>
              )}
            />
          ))}
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          {isLoading ? (
            <Loader aria-label={`Loading...`} />
          ) : (
            <Button
              type="submit"
              disabled={!form.formState.isValid || isLoading}
              className="w-full flex justify-center items-center gap-2"
              size="lg"
              aria-label={`Register account`}>
              Register
              <ArrowRight
                size={24}
                className="text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                aria-hidden
              />
            </Button>
          )}
        </form>
      </Form>
      <div className="mt-6 text-center">
        <p className="text-slate-600 leading-6">
          Already have an account?
          <Button
            variant={`link`}
            size={`link`}
            onClick={() => router.push(ROUTES.LOGIN)}
            className="font-semibold pl-1"
            aria-label={`Log in`}>
            Log in
          </Button>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
