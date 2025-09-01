// This is a test commit

import RegisterForm from '@/components/register/RegisterForm';

const RegisterPage = () => {
  return (
    <div className={`relative w-full max-w-lg mx-auto`}>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Start your underwater adventure</h1>
        <p className="text-slate-600">Create an account and begin logging your dives</p>
      </div>
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-8`}>
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
