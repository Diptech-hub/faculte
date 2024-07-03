import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { SpinnerDotted } from 'spinners-react';

const PrivateRoute: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div><SpinnerDotted size={70} thickness={100} speed={100} color="rgba(3, 76, 221, 1)"/></div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;