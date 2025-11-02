import { FormHeadings } from '@/lib/formUtils';
import { Heading } from '@/components/ui/heading';
import { LoginForm } from '@/components/login/LoginForm';

const LoginPage = () => {
  return (
    <div className={`py-8 relative w-full max-w-lg mx-auto`}>
      <Heading
        {...FormHeadings.login}
        size="base"
        descriptionSize="base"
        headingClassName="!text-2xl"
        className="mb-8"
        center
      />
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-4 md:p-8`}>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
