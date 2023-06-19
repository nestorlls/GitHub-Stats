import { useState } from 'react';
import LoginForm from '../compositeComponents/LoginForm';
import RegisterForm from '../compositeComponents/RegisterForm';
import ChangeLoginRegister from '../baseComponents/ChangeLoginRegister';

const LoginOrRegister = () => {
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');

  function handleLoginOrRegister(e) {
    const name = e.target.name.toLowerCase();
    setIsLoginOrRegister(name);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col w-full gap-2 mt-24 mx-2">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">
            Welcome to Github Stats
          </h1>
          {isLoginOrRegister === 'login' ? <LoginForm /> : <RegisterForm />}
          <div className="text-white">
            {isLoginOrRegister === 'login' ? (
              <ChangeLoginRegister
                text="Don't have an account?"
                onClick={handleLoginOrRegister}
                buttonText="Register"
              />
            ) : (
              <ChangeLoginRegister
                text="Already a member?"
                onClick={handleLoginOrRegister}
                buttonText="Login"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginOrRegister;
