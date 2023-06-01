/* eslint-disable react/button-has-type */
/* eslint-disable prefer-promise-reject-errors */
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/globalStyle';
import styledTheme from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate';
// import SearchProvider from 'Providers/SearchProvider';
// import StudentsProvider from 'Providers/StudentsProvider';
import FormField from 'components/Molecules/FormField/FormField';
import { Button } from 'components/Atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Dashboard from './Dashboard';
import { Wrapper } from './Root.styles';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          {/* <Route path="/group" element={<Dashboard />} /> */}
          <Route path="/group/:id?" element={<Dashboard />} />
          <Route path="/" element={<Navigate replace to="/group" />} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = ({ handleSignIn, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <FormField label="name" id="name" {...register('login', { required: true })} />
      {errors.login && <span style={{ color: 'red' }}>Login is required</span>}
      <FormField label="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span style={{ color: 'red' }}>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </form>
  );
};

function Root() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Please provide valid user data');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        (async () => {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        })();
      } catch (err) {
        console.log(err.message);
      }
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp handleSignIn={handleSignIn} error={error} />}
      </ThemeProvider>
    </Router>
  );
}

export default Root;
