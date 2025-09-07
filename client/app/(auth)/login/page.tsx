import LoginForm from '@/components/login/LoginForm';
import { FormHeadings } from '@/lib/formUtils';
import { PageHeader } from '@/components/layout/PageHeader';

const LoginPage = () => {
  return (
    <div className={`relative w-full max-w-lg mx-auto`}>
      <PageHeader {...FormHeadings.login} />
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-8`}>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
