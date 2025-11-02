import { FormHeadings } from '@/lib/formUtils';
import { Heading } from '@/components/ui/heading';
import { RegisterForm } from '@/components/register/RegisterForm';

const RegisterPage = () => {
  return (
    <div className={`py-8 relative w-full max-w-lg mx-auto`}>
      <Heading
        {...FormHeadings.register}
        size="base"
        descriptionSize="base"
        headingClassName="!text-2xl"
        className="mb-8"
        center
      />
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-4 md:p-8`}>
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
