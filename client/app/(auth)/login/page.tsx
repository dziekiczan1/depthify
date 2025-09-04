import LoginForm from '@/components/login/LoginForm';

const LoginPage = () => {
  return (
    <div className={`relative w-full max-w-lg mx-auto`}>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Start your underwater adventure</h1>
        <p className="text-slate-600">Create an account and begin logging your dives</p>
      </div>
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-8`}>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
