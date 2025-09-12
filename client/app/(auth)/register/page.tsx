import { FormHeadings } from '@/lib/formUtils';
import { Heading } from '@/components/ui/heading';
import { RegisterForm } from '@/components/register/RegisterForm';

const RegisterPage = () => {
  return (
    <div className={`py-8 relative w-full max-w-lg mx-auto`}>
      <Heading {...FormHeadings.register} size="sm" descriptionSize="sm" center />
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-8`}>
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
