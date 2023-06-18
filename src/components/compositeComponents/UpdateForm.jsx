import React, { useState } from 'react';
import Input from '../baseComponents/Input';
import Button from '../baseComponents/Button';
import { useUser } from '../../context/UserContext';

const UpdateForm = () => {
  const { user, update } = useUser();
  const [updateDate, setUpdateDate] = useState({
    email: user.email,
    password: '',
    first_name: user.first_name,
    last_name: user.last_name,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateDate({ ...updateDate, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(updateDate);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="inputs">
        <Input
          label="Email"
          name="email"
          id="email"
          value={updateDate.email}
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          id="password"
          value={updateDate.password}
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
        />
        <Input
          label="First Name"
          name="first_name"
          id="first_name"
          value={updateDate.first_name}
          placeholder="Enter your first name"
          type="first_name"
          onChange={handleChange}
        />
        <Input
          label="Last Name"
          name="last_name"
          id="last_name"
          value={updateDate.last_name}
          placeholder="Enter your last name"
          type="last_name"
          onChange={handleChange}
        />
      </div>
      <Button field="Update" nameClass="warning" type="submit" />
    </form>
  );
};

export default UpdateForm;
