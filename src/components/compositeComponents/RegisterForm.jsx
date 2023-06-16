import React, { useState } from 'react';
import Input from '../baseComponents/Input';
import Button from '../baseComponents/Button';
import { validate } from '../../Utils/form';
import { useUser } from '../../context/UserContext';

const initialValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
};

const RegisterForm = () => {
  const { create } = useUser();
  const [form, setForm] = useState({
    values: initialValues,
    errors: {},
    touched: {},
  });

  const { values, errors, touched } = form;
  const isValid = Object.values(validate(values)).every(
    (value) => value === ''
  );

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

  console.log(values);

  function handleSubmit(e) {
    e.preventDefault();
    create(values);
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
        <div>
          <Input
            label="First Name"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <p className="form-error">{errors.firstName}</p>
          )}
        </div>
        <div>
          <Input
            label="Last Name"
            name="last_name"
            id="last_name"
            placeholder="Enter your first name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p className="form-error">{errors.lastName}</p>
          )}
        </div>
      </div>
      <Button
        field="Register"
        type="submit"
        disabled={!isValid && 'disabled'}
        nameClass="primary"
      />
    </form>
  );
};

export default RegisterForm;
