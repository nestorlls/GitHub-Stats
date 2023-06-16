import React, { useState } from 'react';
import Input from '../baseComponents/Input';
import Button from '../baseComponents/Button';
import { validate } from '../../Utils/form';

const initialValues = { email: '', password: '' };

const LoginForm = () => {
  const [form, setForm] = useState({
    values: initialValues,
    errors: {},
    touched: {},
  });

  const { values, errors, touched } = form;
  const { email, password } = validate(values);
  const isValid = [email, password].every((value) => value === '');

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const values = { ...form.values, [name]: value };
    const errors = validate(values);
    setForm({ ...form, values, errors });
  }

  function handleBlur(e) {
    const name = e.target.name;
    const errors = validate(values);
    setForm((prev) => ({
      ...prev,
      errors,
      touched: { ...prev.touched, [name]: true },
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('form', form);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="inputs">
        <div>
          <Input
            label="Email"
            name="email"
            id="email"
            placeholder="Enter your email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="form-error">{errors.email}</p>
          )}
        </div>
        <div>
          <Input
            label="Password"
            name="password"
            id="password"
            placeholder="Enter your email"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="form-error">{errors.password}</p>
          )}
        </div>
      </div>
      <Button
        field="Login"
        type="submit"
        disabled={!isValid && 'disabled'}
        nameClass="primary"
      />
    </form>
  );
};

export default LoginForm;
