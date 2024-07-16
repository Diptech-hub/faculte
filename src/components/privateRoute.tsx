import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { SpinnerDotted } from 'spinners-react';

const auth = getAuth();

const PrivateRoute: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading || showSpinner) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' 
      }}>
        <SpinnerDotted size={70} thickness={100} speed={100} color="rgba(3, 76, 221, 1)" />
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
