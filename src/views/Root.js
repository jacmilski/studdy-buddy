import React from 'react';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/Molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function Root() {
  const auth = useAuth();
  const { _currentValue } = useError();

  return (
    <>
      {_currentValue?.error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
}

export default Root;
