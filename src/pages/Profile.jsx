import React from 'react';
import Layout from '../components/pageComponents/Layout';
import UpdateForm from '../components/compositeComponents/UpdateForm';
import Button from '../components/baseComponents/Button';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { logout } = useUser();

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="flex justify-between text-white py-4 mb-8">
          <h1 className="text-2xl">Profile</h1>
          <Button field="Logout" onClick={logout} />
        </div>
        <UpdateForm />
      </div>
    </Layout>
  );
};

export default Profile;
