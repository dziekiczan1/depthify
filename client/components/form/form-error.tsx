import { AlertTriangle } from 'lucide-react';

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive w-full">
      <AlertTriangle className="icon-size-md" aria-hidden />
      <p>{message}</p>
    </div>
  );
};
