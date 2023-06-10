import React, { createContext, useMemo, useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

const ErrorContext = createContext({
  error: '',
  setError: () => {},
  dispatchError: () => {},
});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = useCallback((message) => setError(message), []);

  return <ErrorContext.Provider value={useMemo(() => ({ error, dispatchError }), [error, dispatchError])}>{children}</ErrorContext.Provider>;
};

ErrorProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return ErrorContext;
};
