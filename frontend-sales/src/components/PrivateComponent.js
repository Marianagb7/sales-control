<<<<<<< HEAD
import { useUser } from '../context/userContext.js';
=======
import { useUser } from '../';
>>>>>>> e992176186799498250e9924e6507a23e99ad272
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;