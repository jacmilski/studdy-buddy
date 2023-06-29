import React from 'react';
import FormField from 'components/Molecules/FormField/FormField';
import { Button } from 'components/Atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { FormWrapper } from './UnauthenticatedApp.styles';

const UnauthenticatedApp = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper onSubmit={handleSubmit(auth.signIn)}>
      {/* {error && <span style={{ color: 'red' }}>{error}</span>} */}
      <FormField label="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span style={{ color: 'red' }}>Login is required</span>}
      <FormField label="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span style={{ color: 'red' }}>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </FormWrapper>
  );
};

export default UnauthenticatedApp;
