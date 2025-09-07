import RegisterForm from '@/components/register/RegisterForm';
import { FormHeadings } from '@/lib/formUtils';
import { PageHeader } from '@/components/layout/PageHeader';

const RegisterPage = () => {
  return (
    <div className={`relative w-full max-w-lg mx-auto`}>
      <PageHeader {...FormHeadings.register} />
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-8`}>
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
