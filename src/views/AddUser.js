/* eslint-disable no-fallthrough */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-return-assign */
import React, { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from 'components/Molecules/FormField/FormField';
import { Button } from 'components/Atoms/Button/Button';
import { ViewsWrapper as Wrapper } from 'components/Organisms/ViewsWrapperStyles/ViewsWrapper.styles';
import { Title } from 'components/Atoms/Title/Title';
import { UsersContext } from 'Providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialFormState = [
  {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
  },
];

function AddUser() {
  const navigate = useNavigate();
  const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState);

  const { handleAddUser } = useContext(UsersContext);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initialFormState);

      navigate('/');
    } else {
      handleThrowError('You need to give consent!');
    }
  };

  return (
    <Wrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new user</Title>
      <FormField ref={ref} label="Name" id="name" name="name" value={formValues.name} handleChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} handleChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} handleChange={handleInputChange} />
      <FormField label="Consent" id="consent" name="consent" type="checkbox" handleChange={handleToggleConsent} />
      {formValues.error ? <p>{formValues.error}</p> : null}
      <Button type="submit">Add</Button>
    </Wrapper>
  );
}

export default AddUser;
