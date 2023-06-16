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
    <div className="section">
      <div className="container">
        <div className="flex flex-col w-full items-center gap-2">
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
    </div>
  );
};

export default LoginOrRegister;
