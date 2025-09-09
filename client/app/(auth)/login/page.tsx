import LoginForm from '@/components/login/LoginForm';
import { FormHeadings } from '@/lib/formUtils';
import { Heading } from '@/components/ui/heading';

const LoginPage = () => {
  return (
    <div className={`py-8 relative w-full max-w-lg mx-auto`}>
      <Heading {...FormHeadings.login} size="sm" descriptionSize="sm" center />
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-8`}>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
